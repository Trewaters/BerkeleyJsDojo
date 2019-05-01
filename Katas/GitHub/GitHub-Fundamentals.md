# GitHub Fundamentals

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
- `git checkout .` - undo all changes in my working tree. Kind of a rewind
- errors while trying to switch. Maybe committed changes. Try `git stash` [documentation](https://git-scm.com/docs/git-stash) then `git checkout <BRANCH>`

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
