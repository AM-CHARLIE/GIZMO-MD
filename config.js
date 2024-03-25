const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chegecharles74@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BwwaKvTZRtlLu6iCBHo8SJ";
global.website=process.env.GURL || "https://chat.whatsapp.com/BwwaKvTZRtlLu6iCBHo8SJ" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2603b6e560ded185f83f0.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795988322";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/2603b6e560ded185f83f0.jpg,https://telegra.ph/file/2603b6e560ded185f83f0.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.https://telegra.ph/file/2603b6e560ded185f83f0.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_32_03_21_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia01IakUwQy82V1luSjJuN2ZnT0N2ZW85M2dvOUEwb25XL0hMK291WGRuQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVsSUpYTlBCSlRNUHV6MHNsM1krbm13YlJFbFQ4bStoZjJIUWVDeVZ4d1k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUY2eUc4L204WEwzWEdjTFcyZjJnTDFhZHN6MHE4QWVtVG9TZ2p6aGRrYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjFOdkJ1bHpqZVRFRjNxREFNeXFheERqM0lucVdvcUNjUDB2N1pFSEdzaXc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZUdpaHVFQTBaMHc0bStvZTc1RTgwMFFLQUcxdXM3VitaVS9yR3IvaXNITT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkNjRWJ3djFJQUFJNmlUdzhMcWdDb2ZDc2RqZUtPem02WDNsSU9WMnBCaWc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtRk9qWGpaQUZqVFROK1VzRjJWR3NEZmE4Mk1JdzJRYk9wQUMzU2ptTG00PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMjhrakV3djlyZ2cwcXVwajdpTVJHNEl6Y2VRd3pKRXFkYUpMR09MRE1CWT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYVVRLc3c1OGxHdkVSRk5EN0FYMnBtY1ErYVBxMWpQdkpud3RzWDFZa2J3NmZ3a0hJNHRCMlYrN1NaQWgzdVd5QmMrdDlzWjdUWkVkMmhYemQzWHNBUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTg5LFwiYWR2U2VjcmV0S2V5XCI6XCIxSXNIZzdnN0l1STQyKzQ1VWtSNDFCSGIvQnR1TzFJZ25Icm5OUDFTN2g0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjU0MTAzNzE5NjYxQHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkNDMDY4MDRCQzlERDAwNUQ2QUU0RjA4QjJBQUJCMEJGXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEwNjM5NTZ9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCI2Z1k0YUg5T1JtNlp0bkhaTVk4Vnh3XCIsXCJwaG9uZUlkXCI6XCI0MDkzZDk2MC05OWFkLTQ3ZmUtYjAxOC01MmQ3MzliNTI4NDJcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInAzdWdUNEpaQlFnMVdyQVBrQytRbXlkekVqaz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY043bzhycHVZbXl1N3hIT2lSMUhHbWxFT2RVPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNNZWV5UFVFRUltSDg2OEdHQVFnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiZ0plUjc4ZHUyWVRydG00QjZIR0JSajdMUUJaakx3R1cwelJVTkdvcVNrOD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkZYZlhmc2ltTE5la0s3bUNHSFUydnliczczamZVaVo2T042Y0xNS2NhRDgxNi9PeVMwWDA0SjFiRUlsbE1BZDdQUlRHZHZTTks4NDc2WnllS1RrQ0JnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiaW1nZGhkL25jd2pBYXNST0M5ejZDZ1hsUTk3Y3NrNm5aOW9IOFl1OUxxY3Nhd3N3dkVvSDM0Q3l4SnhoV2F0ek9RNnpadkF1alhic0tDZ2NLWUFIQlE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjI1NDEwMzcxOTY2MToyNkBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxMTk0MDA1MTAyOTYxMjU6MjZAbGlkXCIsXCJuYW1lXCI6XCIuXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0MTAzNzE5NjYxOjI2QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQllDWGtlL0hidG1FNjdadUFlaHhnVVkreTBBV1l5OEJsdE0wVkRScUtrcFBcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzExMDYzOTUxLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUt0VFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt0VC5qc29uIjogIntcImtleURhdGFcIjpcIkFDdXg1VWQzY1o1R05ZTThkVnJrRVJkSjduMFRzUm5ZNSt3bDBKNTBiYkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMyMDI5MjE2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExMDI0NDY0MzQzXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "𝐆𝐈𝐙𝐌𝐎 𝐓𝐄𝐂𝐇" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Gizmo",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐆𝐈𝐙𝐌𝐎 𝐓𝐄𝐂𝐇",
  ownername:process.env.OWNER_NAME|| "MR.CHALO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
