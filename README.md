### To Run the Test.

1. **Install Node**

   - **Install node** in your system as instructed [here](https://nodejs.org/en/download/) with installer.
   - Or, you can also use package manager to install node in your system. [Follow the instructions here](https://nodejs.org/en/download/package-manager/)

2. **Clone the GitHub repo**

```text
git clone https://github.com/pthapa1/Automating-AmazonDotCom.git
```

> You might need to install git in your system if you don't have it already.

**OR**
simply download the folder from GitHub. Click on Download Zip.

---

3. **Install dependencies on the root folder.**

```text
npm install
```

4. **After installing dependencies, to run the test on the Browser, use one of the following commands**

```text
npx cypress open
```

**OR**

```
npm run runner
```

When Cypres Runner Opens, click on amazon.ts file inside the Guild Education folder.

5. **To run the test on headless mode, use**

for windows

```
npx cypress run --spec "cypress\integration\Guild Education\amazon.ts"
```

for mac

```
npx cypress run --spec "cypress/integration/Guild Education/amazon.ts"
```
