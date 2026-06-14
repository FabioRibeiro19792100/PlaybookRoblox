/**
 * Setup México checklist — Google Sheets backend (Google Apps Script Web App)
 *
 * SETUP (one time):
 * 1. Create a new Google Sheet (this will store the checklist state).
 * 2. Extensions > Apps Script. Delete the default code and paste this file.
 * 3. Save. Then Deploy > New deployment > type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorize, and copy the "/exec" Web app URL.
 * 4. Put that URL in the site:
 *      - Vercel env var  VITE_SHEETS_ENDPOINT = <the /exec URL>   (recommended), or
 *      - hardcode it in src/SetupChecklist.jsx (SHEETS_ENDPOINT).
 *    Then redeploy the site.
 *
 * The site stores one row per task id (e.g. "s1t1"): id | done | updatedAt.
 * State is shared by everyone who opens the page.
 */

const SHEET_NAME = 'checklist';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'done', 'updatedAt']);
  }
  return sh;
}

function doGet() {
  const sh = getSheet_();
  const rows = sh.getDataRange().getValues();
  const out = {};
  for (let i = 1; i < rows.length; i++) {
    const id = rows[i][0];
    if (!id) continue;
    const v = rows[i][1];
    out[id] = v === true || v === 'TRUE' || v === 'true';
  }
  return ContentService
    .createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000); // serialize writes so concurrent editors can't create duplicate rows
  } catch (err) {
    return json_({ ok: false, error: 'busy' });
  }
  let res = { ok: false };
  try {
    const body = JSON.parse(e.postData.contents);
    const id = String(body.id || '').trim();
    const done = !!body.done;
    if (id) {
      const sh = getSheet_();
      const rows = sh.getDataRange().getValues();
      let target = -1;
      const extras = [];
      for (let i = 1; i < rows.length; i++) {
        if (String(rows[i][0]) === id) {
          if (target < 0) target = i + 1; else extras.push(i + 1);
        }
      }
      const ts = new Date().toISOString();
      if (target > 0) {
        sh.getRange(target, 2).setValue(done);
        sh.getRange(target, 3).setValue(ts);
      } else {
        sh.appendRow([id, done, ts]);
      }
      // collapse any pre-existing duplicate rows for this id (bottom-up)
      extras.sort(function (a, b) { return b - a; }).forEach(function (r) { sh.deleteRow(r); });
      res = { ok: true, id: id, done: done };
    }
  } catch (err) {
    res = { ok: false, error: String(err) };
  } finally {
    lock.releaseLock();
  }
  return json_(res);
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
