It is a template of resume.
(Visit https://fanjingdan012.github.io/resume/index.html)
# Why use html template
- Saving time for formatting when you edit in Microsoft Word.
- More focused on content.
- Can put it online so you can share it anywhere, any time. 
- Easy to convert to pdf by printing function of browser.

# How to use
## Normal
- Edit your data in data.js

## Encrypted
- Encode your avatar to Base64 put it into your data's avatar field.
- To protect your personal data, use AES(consider a key and remember it) to encrypt your version of data`{....}` and replace `data.encrypt.js`
- Visit your website by adding '?pwd=x'. x=Base64(AESkey+'yyyyMMdd' format of today), x changes every day. Like https://fanjingdan012.github.io/resume/index.html?pwd=XXXXXXX
- Though this is not so perfect, enough to protect your personal data to put it on github(no server, so nowhere to setup an RSA encrypt)
- When you share your resume to a dangerous person, you may change your AESkey, because Base64 is not safe.
- Tools: you can use this: http://tool.oschina.net/encrypt
- Add parameter `&lang=zh` or 'en' to change language. I'm not using vue-i18n because it is more convenient to edit cn and en together for resumes. 