### Position 1: Join the Dojo, Initialize Yatate file

- Open command prompt
- Change directory to working folder location
- Add a text “.txt” file with your name and information
  - Or update your current text “.txt” file with a date and note
- stages file, now ready for commit
  - Documentation ( https://git-scm.com/docs/git-add )
- upload your file

### Position 2: Update your Yatate file

- Open command prompt
- Change directory to working folder location
- pull down any new changes to local repository, before attempting to update your local files
- Check your working tree with [git diff](https://git-scm.com/docs/git-diff)
- Update your Yatate file
- see changes that were staged
- push all the changes to remote repository.

### Position 3: Create a Pull Request

- Make sure the repository is up to date
- checkout new branch
- push new branch to GitHub
- Use Pull Request button in the GitHub project
  - Command line Pull Request documentation ( https://git-scm.com/docs/git-request-pull )
- [About Pull Request](https://help.github.com/articles/about-pull-requests/)
- [Merging pull request](https://help.github.com/articles/merging-a-pull-request/)

### Position 4: Create/Merge a Branch to the Master

- create branch
- checkout branch
- checkout master in preparation of merge
- delete the old branch that was merged to master, clean up
- Merging documentation ( https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging )
- Resolving conflicts with merging documentation ( https://help.github.com/articles/resolving-a-merge-conflict-on-github/ )

### Position 5: Commit Message

- add all previously tracked files, does not capture any new files
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
- Verify the new remote named 'upstream'
- When you need to update your fork, you first fetch the upstream branches and commits into your repo. Checkout your master branch and merge upstream
  - Fetch from upstream remote
  - View all branches, including those from upstream
- Checkout your master and merge the upstream repo master
- Create a branch

### Position 7: Remove current commit history
- Remove the history from a commit so that your branch is only showing 1 commit.

### Position 8: Move commit to a new branch
- Move your last commit to a new branch and reset your original branch to the state it was before the last change.

### Position 9: Create a GitHub Repo starting with local files
- Create a new GitHub repo from a project that was started on your local machine.