### Create a new directory

- `git init`

### Create a working copy of the repository

- `git clone /path/to/repository`
- `git clone username@host:/path/to/repository`

### Remote repository

- `git remote -v` - view current remote locations

- `git remote add REMOTE_NAME /path/to/repository`
- `git remote set-url REMOTE_NAME REPOSITORY_URL` - set remote location
- `git fetch REMOTE_NAME`- get all files from repository
- [Documentation](https://help.github.com/articles/changing-a-remote-s-url/)

### Add & Commit

- `git add <FILENAME>` or `git add *` – propose a change
- `git commit -m “COMMIT_MESSAGE”` – committed to the HEAD, but not in the repository
- `git commit -a “COMMIT_MESSAGE”` - will commit and remove any files that were deleted but not “git rm” from the staged area
- `git config --global user.name "<USERNAME>"` - set authors name on the local computer
- `git config --global user.email EMAIL@ADDRESS.COM` - set authors email address for the commit
- `git commit --amend --reset-author` -go to the VI editor. End edits and quit with command `:q!`
- `git rm --cached` - unstage file, [documented here](https://git-scm.com/docs/git-rm)

### Pushing Changes

- `git push origin master` – send changes to your remote repository
- `git remote add origin <SERVER>` – use this command, if you have not cloned an existing repository and want to connect your repository to a remote server
- `git remote -v` - see the remotes you are working with. see [git remote](https://git-scm.com/docs/git-remote)

### Branching

- `git checkout -b <FEATURE_X>` – create and name a branch
- `git checkout master` – switch branches
- `git branch -d <FEATURE_X>` – delete the branch named <FEATURE_X>
  - In order to delete remote branches use this `git branch -d -r origin/<FEATURE_X>`. [doc explanation](https://git-scm.com/docs/git-branch)
- `git push origin <branch>` – branch is unavailable until it is pushed to remote repository
- `git branch -m <OLD-BRANCH-NAME> <NEW-BRANCH-NAME>` - rename branch
- `git push origin --delete <BRANCH-NAME>` delete remote branch
- `git branch --delete <BRANCH-NAME>` delete local branch

- `git log --oneline --decorate` see the current HEAD Branch. or `git log --oneline --decorate --graph --all` see all the commits and where the pointers are.
- `git log -1 --format="%an %ae%n%cn %ce` SHA_HASH
  `%an`: author name
  `%ae`: author email
  `%cn`: committer name
  `%ce`: committer email
- `git branch -a` get list of branches
- `git branch -r` list remote branches
- `git show SHA_HASH` or `git show SHA_HASH` show the details based on the short sha in the log
- `git remote show origin` - show branch details

### Update & Merge

- `git pull` – update local repo to newest commit [documented here](https://git-scm.com/docs/git-pull)
- `git merge <branch>` – merge another branch into your active branch
- `git add <FILENAME>` – mark changed file as merged. Caused by conflicts
- `git diff <SOURCE_BRANCH> <TARGET_BRANCH>` – preview changes before merging, see [git diff](https://git-scm.com/docs/git-diff) for more details

### Tagging

- `git tag 1.0.0 <COMMIT_ID>` – add a version tag to the commit ID referenced

### Log

- `git log` – study the repository history
- `git log --author=BOB` – see commits from a certain author
- `git log --pretty=oneline` – view one line of each commit
- `git log --graph --oneline --decorate --all` - ASCII art tree of all the branches
- `git log --name-status` - see only which files have changed
- `git log --help` -see more log commands

- [git log documentation](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

### Replace local changes

- `git checkout --<FILENAME>` - replace local changes
- `git fetch origin` - drop all local changes
- `git reset --hard origin/master`

### UNDO

- `git reset --hard [HEAD]` completely remove all staged and unstaged changes to tracked files
- `git clean [-f]` - Remove files that are not tracked
- `git checkout .` - undo all changes in my working tree

### Status

- `git status` - show the working tree, and changes

### Configuration

- `git config --global --edit`

### Remove

- `git rm ‘*.txt’` - this uses a wild card.

**remove a directory**

- `git rm -r --cached some-directory`
- `git commit -m 'Remove the now ignored directory "some-directory"'`
- `git push origin master`

Using [Visual Git Guide](http://marklodato.github.io/visual-git-guide/index-en.html) as a reference for these katas

### ADD- pull request

- [about pull request](https://help.github.com/articles/about-pull-requests/) documentation
- [create pull request](https://help.github.com/articles/creating-a-pull-request/)
  - [create a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)

### ADD- forks

- [working with forks](https://help.github.com/articles/working-with-forks/)
- Fork the repo from github.
- Configuring remotes.

```git
git remote -v
git remote add upstream <ORIGINAL-REPOSITORY>
git remote -v
```

- Syncing fork.

```git
git fetch upstream
git checkout master
git merge upstream/master
```

### Commit Notes

- Originally I read it [here](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53) and try to improve my commit messages.
- Below is a list of standard commit subjects that I use.

  - [INITIALIZE] - getting started setting up the app
  - [DEBUG] - debugging
  - [UPDATE] - update the code
  - [ADD] - adding something new
  - [DELETE] - delete code
  - [REFACTOR] - optimize code
  - [ISSUE] - when referring to or trying to fix an issue.

# Kata Positions
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

### Position 7: Remove current commit history
1. `git checkout --orphan temp_branch`
2. `git add -A`
3. `git commit -am "INITIALIZE"`
4. `git branch -D master`
5. `git branch -m master`
6. `git push -f origin master`

### Position 8: Move commit to a new branch
