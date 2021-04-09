**Web Scrape Code Test**

This is a three step test. Each step should include instructions on how to run the code.

1. In a git branch, write a script that will scrape the content of three websites that you define and saves them on the local disk as .html pages.

2. In a second branch, convert your script into a rest API that can be passed a url and return the homepage content as a string

3. In a third branch, build an interface with a text box that accepts one or more urls, and a button to submit the form. Use your api from step 2 to display the content of each url as a raw html string in a results area of the interface. I should be able to tell which url corresponds with which html string.

Once complete, provide the link to the public repository

**Solution #1**

This branch provides the solution to task #1.

- Tested in node v12
- Business logic is in the `app.js` file
- Install dependencies with `npm install`
- Run `npm run start` and the script will fetch 3 websites and store them in the local filesystem. The files should be relative to the cwd


**Solution #2**

This is in the `solution-2` branch

**Solution #3**

This is in the `solution-3` branch