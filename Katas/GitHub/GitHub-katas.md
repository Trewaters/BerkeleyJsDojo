### Position 1: Join the Dojo, Initialize Yatate file

- Open command prompt
- Change directory to working folder location
- `git clone https://github.com/Trewaters/BerkeleyJsDojo.git`
- Add a text “.txt” file with your name and information
  - Or update your current text “.txt” file with a date and note
- `git add <FILENAME>` - stages file, now ready for commit
  - Documentation ( https://git-scm.com/docs/git-add )
- `git commit -m “COMMIT_MESSAGE”`
- `git push origin master` - upload your file
  - Or `git remote add origin https://github.com/Trewaters/BerkeleyJsDojo.git` - use this if you haven’t cloned the repository
- `git log`

### Position 2: Update your Yatate file

- Open command prompt
- Change directory to working folder location
- `git status`
- `git pull origin master` - pull down any new changes to local repository, before attempting to update your local files
- `git diff HEAD` - Check your working tree with [git diff](https://git-scm.com/docs/git-diff)
- Update your Yatate file
- `git add <FILENAME>`
- `git diff --staged` - see changes that were staged
  - `git reset <FILENAME>` - if you need to unstage a file
  - `git checkout --<TARGET_FILENAME>` - if you need to get rid of all the changes since the last commit for <TARGET>
- `git commit -m “COMMIT_MESSAGE”`
- `git push` - push all the changes to remote repository.

### Position 3: Create a Pull Request

- `git pull origin master` - Make sure the repository is up to date
- `git checkout -b <BRANCH_NAME>` - checkout new branch
- `git push origin <BRANCH_NAME>` - push new branch to GitHub
- Use Pull Request button in the GitHub project
  - Command line Pull Request documentation ( https://git-scm.com/docs/git-request-pull )
- [About Pull Request](https://help.github.com/articles/about-pull-requests/)
- [Merging pull request](https://help.github.com/articles/merging-a-pull-request/)

### Position 4: Create/Merge a Branch to the Master

- `git checkout -b <BRANCH_NAME>` - shortcut for create and checkout
  - `git branch <BRANCH_NAME>` - create branch
  - `git checkout <BRANCH_NAME>` -checkout branch
- `git checkout -b master` - checkout master in preparation of merge
- `git merge <BRANCH_NAME>`
- `git merge -d <BRANCH_NAME>` - delete the old branch that was merged to master, clean up
- Merging documentation ( https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging )
- Resolving conflicts with merging documentation ( https://help.github.com/articles/resolving-a-merge-conflict-on-github/ )

### Position 5: Commit Message

- `git add -a`
  - add all previously tracked files, does not capture any new files
- `git commit -m "<MESSAGE_TEXT>"`
- commit rules
  1.  Separate subject form body with a blank line (not easy)
      - use 2 message flags. The first will be interpreted as the Subject, then the other will be the content
      - example `git commit -m "<SUBJECT_LINE>" -m "<CONTENT_TEXT>"
  2.  Limit the subject line to 50 characters
  3.  Capitalize the Subject line
  4.  Do not end the subject line with a period
  5.  Use the imperative mood in the subject line
  6.  Wrap the body at 72 characters
  7.  Use the body to explain what and why vs. how

### Position 6: Keep the Fork up-to-date

- Add 'upstream' repo to list of remotes
  - `git remote add upstream https://github.com/UPSTREAM-USER/ORIGINAL-PROJECT.git`
- Verify the new remote named 'upstream'
  - `git remote -v`
- When you need to update your fork, you first fetch the upstream branches and commits into your repo. Checkout your master branch and merge upstream
  - Fetch from upstream remote
    - `git fetch upstream`
  - View all branches, including those from upstream
    - `git branch -va`
- Checkout your master and merge the upstream repo master
  - `git checkout master`
  - `git merge upstream/master`
- Create a branch
  - `git checkout master`
  - `git branch newfeature`
  - `git checkout newfeature`
