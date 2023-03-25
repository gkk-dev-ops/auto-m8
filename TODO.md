# TODOs

(A) Support savings selectors: `site: [selectors..]` in local storage - (inform of saving by displaying spinner, since there is no service worker - site dies after closing popu window).

(B) Support saving actions - save code snippets as action possible to run on current tab.
e.g.:
Save code snippets below to open all options on notification view on linkedin.com

```js
$$('li-icon.nt-card-settings-dropdown__trigger-icon').forEach(el => el.click())
```

User should be able to:

- see the action name
- lookup action code
- run the action by clicking single button
