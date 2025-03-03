import i18n from "../i18n";

export type OptionType = {
  value: string;
  label: string;
  nb?: string;
  usage?: string;
};

export const secondaryOptions=():{ [key: string]: OptionType[] }=> ({
  commit: [
    {
      value: "local-changes",
      label: i18n.t("options.secondary.commit.local-changes.label"),
      usage: "git commit -a",
    },
    {
      value: "staged-changes",
      label: i18n.t("options.secondary.commit.staged-changes.label"),
      usage: "git commit -m <message>",
      nb: i18n.t("options.secondary.commit.staged-changes.nb"),
    },
  ],

  configure: [
    {
      value: "email-name",
      label: i18n.t("options.secondary.configure.email-name.label"),
      usage:
        'git config --global user.name "username" \n\ngit config --global user.email "email address"',
      nb: i18n.t("options.secondary.commit.email-name.nb"),
    },
    {
      value: "editor",
      label: i18n.t("options.secondary.configure.editor.label"),
      usage: 'git config --global core.editor "vim"',
      nb: i18n.t("options.secondary.configure.editor.nb"),
    },
    {
      value: "diff-tool",
      label: i18n.t("options.secondary.configure.diff-tool.label"),
      usage: 'git config --global diff.external "meld"',
      nb: i18n.t("options.secondary.configure.diff-tool.nb"),
    },
    {
      value: "merge-tool",
      label: i18n.t("options.secondary.configure.merge-tool.label"),
      usage: 'git config --global merge.tool "meld"',
      nb: i18n.t("options.secondary.configure.merge-tool.nb"),
    },
    {
      value: "color",
      label: i18n.t("options.secondary.configure.color.label"),
      usage: "git config --global color.ui auto",
      nb: i18n.t("options.secondary.configure.color.nb"),
    },
    {
      value: "signingkey",
      label: i18n.t("options.secondary.configure.signingkey.label"),
      usage: "git config --global user.signingkey <your-secret-gpg-key>",
      nb: i18n.t("options.secondary.configure.signingkey.nb"),
    },
  ],

  revert: [
    {
      value: "specific-commit",
      label: i18n.t("options.secondary.revert.specific-commit.label"),
      usage: "git revert <commit-hash>",
      nb: i18n.t("options.secondary.revert.specific-commit.nb"),
    },
    {
      value: "specific-file",
      label: i18n.t("options.secondary.revert.specific-file.label"),
      usage: "git checkout <repo>/<branch> <filename>",
    },
    {
      value: "to-last-commit",
      label: i18n.t("options.secondary.revert.to-last-commit.label"),
      usage: "git reset --hard",
    },
    {
      value: "to-last-commit-from-remote",
      label: i18n.t(
        "options.secondary.revert.to-last-commit-from-remote.label"
      ),
      usage: "git reset --hard <repo>/<branch>",
    },
  ],

  initialize: [
    {
      value: "new-repo",
      label: i18n.t("options.secondary.initialize.new-repo.label"),
      nb: i18n.t("options.secondary.initialize.new-repo.nb"),
      usage: "git init",  
    },
  ],

  modify: [
    {
      value: "commit-message",
      label: i18n.t("options.secondary.modify.commit-message.label"),
      usage: "git commit --amend",
    },
    {
      value: "commit",
      label: i18n.t("options.secondary.modify.commit.label"),
      usage: "git add . \ngit commit --amend --no-edit",
    },
    {
      value: "remoteUrl",
      label: i18n.t("options.secondary.modify.remoteUrl.label"),
      usage: "git remote set-url <alias> <url>",
      nb: i18n.t("options.secondary.modify.remoteUrl.nb"),
    },
  ],

  show: [
    {
      value: "repo-status",
      label: i18n.t("options.secondary.show.repo-status.label"),
      usage: "git status",
    },
    {
      value: "logs",
      label: i18n.t("options.secondary.show.logs.label"),
    },
    {
      value: "uncommittedChanges",
      label: i18n.t("options.secondary.show.uncommittedChanges.label"),
      usage: "git diff",
    },
    {
      value: "committedChanges",
      label: i18n.t("options.secondary.show.committedChanges.label"),
      usage: "git diff --staged",
    },
    {
      value: "remoteUrl",
      label: i18n.t("options.secondary.show.remoteUrl.label"),
      usage: "git remote -v",
    },
    {
      value: "stash",
      label: i18n.t("options.secondary.show.stash.label"),
      usage: "git stash list",
    },
    {
      value: "branch",
      label: i18n.t("options.secondary.show.branch.label"),
      usage: "git branch",
      nb: i18n.t("options.secondary.show.branch.nb"),
    },
    {
      value: "tags",
      label: i18n.t("options.secondary.show.tags.label"),
      usage: "git tag",
    },
  ],

  delete: [
    {
      value: "branch",
      label: i18n.t("options.secondary.delete.branch.label"),
      usage: "git branch -D <branch name>",
    },
    {
      value: "delete-multiple-branches",
      label: i18n.t("options.secondary.delete.delete-multiple-branches.label"),
    },
    {
      value: "tag",
      label: i18n.t("options.secondary.delete.tag.label"),
      usage: "git tag -d v<tag version>",
    },
    {
      value: "remote",
      label: i18n.t("options.secondary.delete.remote.label"),
      usage: "git remote rm <remote>",
    },
    {
      value: "untracked-files",
      label: i18n.t("options.secondary.delete.untracked-files.label"),
      usage: "git clean -<flag>",
      nb: i18n.t("options.secondary.delete.untracked-files.nb"),
    },
    {
      value: "files-from-index",
      label: i18n.t("options.secondary.delete.files-from-index.label"),
      usage: "git rm --cached <file or dir>",
      nb: i18n.t("options.secondary.delete.files-from-index.nb"),
    },
    {
      value: "local-branches-not-on-remote",
      label: i18n.t(
        "options.secondary.delete.local-branches-not-on-remote.label"
      ),
      usage: "git remote prune <remote-name>",
      nb: i18n.t("options.secondary.delete.local-branches-not-on-remote.nb"),
    },
    {
      value: "files-from-old-commit",
      label: i18n.t("options.secondary.delete.files-from-old-commit.label"),
      usage:
        "git filter-branch --index-filter \n'git rm --cached --ignore-unmatch path/to/mylarge_file' \n--tag-name-filter cat -- --all\n\nfilter-branch keeps backups too, so the size of the repo won't decrease immediately unless you expire the reflogs and garbage collect:\n\nrm -Rf .git/refs/original       # careful\ngit gc --aggressive --prune=now # danger",
      nb: i18n.t("options.secondary.delete.files-from-old-commit.nb"),
    },
  ],

  compareCommits: [
    {
      value: "terminal",
      label: i18n.t("options.secondary.compareCommits.terminal.label"),
      usage: "git diff <sha1> <sha2>",
      nb: i18n.t("options.secondary.compareCommits.terminal.nb"),
    },
    {
      value: "file",
      label: i18n.t("options.secondary.compareCommits.file.label"),
      usage: "git diff <sha1> <sha2> > diff.txt",
      nb: i18n.t("options.secondary.compareCommits.file.nb"),
    },
  ],

  clone: [
    {
      value: "clone-repo-into-a-new-dir",
      label: i18n.t("options.secondary.clone.clone-repo-into-a-new-dir.label"),
      usage: "git clone <repo-url> <directory>",
      nb: i18n.t("options.secondary.clone.clone-repo-into-a-new-dir.nb"),
    },
    {
      value: "clone-repo-into-a-current-dir",
      label: i18n.t(
        "options.secondary.clone.clone-repo-into-a-current-dir.label"
      ),
      usage: "git clone <repo-url> .",
      nb: i18n.t("options.secondary.clone.clone-repo-into-a-current-dir.nb"),
    },
    {
      value: "clone-repo-with-submodule-into-a-current-dir",
      label: i18n.t(
        "options.secondary.clone.clone-repo-with-submodule-into-a-current-dir.label"
      ),
      usage: "git clone --recurse-submodules <repo-url> .",
      nb: i18n.t(
        "options.secondary.clone.clone-repo-with-submodule-into-a-current-dir.nb"
      ),
    },
    {
      value: "clone-submodule-after",
      label: i18n.t("options.secondary.clone.clone-submodule-after.label"),
      usage: "git submodule update --init --recursive",
    },
  ],

  ignore: [
    {
      value: "ignore-files-in-a-dir",
      label: i18n.t("options.secondary.ignore.ignore-files-in-a-dir.label"),
      usage: "<dir name>/*",
      nb: i18n.t("options.secondary.ignore.ignore-files-in-a-dir.nb"),
    },
    {
      value: "ignore-all-files-of-a-specific-type",
      label: i18n.t(
        "options.secondary.ignore.ignore-all-files-of-a-specific-type.label"
      ),
      usage: "*.<filename extension>",
      nb: i18n.t(
        "options.secondary.ignore.ignore-all-files-of-a-specific-type.nb"
      ),
    },
  ],

  help: [
    {
      value: "command-help",
      label: i18n.t("options.secondary.help.command-help.label"),
      usage: "append --help to the command",
      nb: i18n.t("options.secondary.help.command-help.nb"),
    },
  ],

  add: [
    {
      value: "new-changes",
      label: i18n.t("options.secondary.add.new-changes.label"),
      usage: "git add <file.ext>",
      nb: i18n.t("options.secondary.add.new-changes.nb"),
    },
    {
      value: "add-new-branch",
      label: i18n.t("options.secondary.add.add-new-branch.label"),
    },
    {
      value: "add-repo",
      label: i18n.t("options.secondary.add.add-repo.label"),
      usage: "git remote add <shortname> <url>",
    },
    {
      value: "add-alias",
      label: i18n.t("options.secondary.add.add-alias.label"),
      usage: "git config --global alias.<alias> <command>",
      nb: i18n.t("options.secondary.add.add-alias.nb"),
    },
    {
      value: "add-annotated-tag",
      label: i18n.t("options.secondary.add.add-annotated-tag.label"),
      usage: 'git tag -a v1.4 -m "my version 1.4"\n\ngit push --tags',
    },
    {
      value: "add-annotated-tag-for-old-commit",
      label: i18n.t(
        "options.secondary.add.add-annotated-tag-for-old-commit.label"
      ),
      usage:
        "git tag -a v1.2 -m 'version 1.2' <commit-hash>\n\ngit push --tags",
    },
  ],

  push: [
    {
      value: "new-remote-branch",
      label: i18n.t("options.secondary.push.new-remote-branch.label"),
      usage: "git push -u origin <branchname>",
    },
  ],

  rename: [
    {
      value: "branch",
      label: i18n.t("options.secondary.rename.branch.label"),
    },
    {
      value: "file",
      label: i18n.t("options.secondary.rename.file.label"),
      usage: "git mv file_from file_to",
    },
    {
      value: "remoteUrl",
      label: i18n.t("options.secondary.rename.remoteUrl.label"),
      usage: "git remote rename <oldname> <newname>",
    },
  ],

  merge: [
    {
      value: "branch",
      label: i18n.t("options.secondary.merge.branch.label"),
      usage: "git merge <branch-name>",
    },
    {
      value: "single-file",
      label: i18n.t("options.secondary.merge.single-file.label"),
      usage: "git checkout <branch name> <path to file> --patch",
    },
  ],

  squash: [
    {
      value: "pr",
      label: i18n.t("options.secondary.squash.pr.label"),
      usage: "git rebase -i <branch name>",
      nb: i18n.t("options.secondary.squash.pr.nb"),
    },
    {
      value: "commits",
      label: i18n.t("options.secondary.squash.commits.label"),
      usage: "git reset --soft HEAD~N\ngit add .\ngit commit -m <message>",
      nb: i18n.t("options.secondary.squash.commits.nb"),
    },
  ],

  debug: [
    {
      value: "bisect",
      label: i18n.t("options.secondary.debug.bisect.label"),
      usage:
        "git bisect start\ngit bisect bad                 # Current version is bad\ngit bisect good v2.13          # v6.12 is known to be good",
      nb: i18n.t("options.secondary.debug.bisect.nb"),
    },
    {
      value: "blame",
      label: i18n.t("options.secondary.debug.blame.label"),
      usage: "git blame -L <number-line-start>,<number-line-end> <filename>",
      nb: i18n.t("options.secondary.debug.blame.nb"),
    },
    {
      value: "grep",
      label: i18n.t("options.secondary.debug.grep.label"),
      usage: "git grep -n <your_text_or_expression>",
      nb: i18n.t("options.secondary.debug.grep.nb"),
    },
  ],

  recover: [
    {
      value: "dropped-commit",
      label: i18n.t("options.secondary.recover.dropped-commit.label"),
      usage: "git reflog",
      nb: i18n.t("options.secondary.recover.dropped-commit.nb"),
    },
    {
      value: "deleted-branch",
      label: i18n.t("options.secondary.recover.deleted-branch.label"),
      usage: "git fsck --full",
      nb: i18n.t("options.secondary.recover.deleted-branch.nb"),
    },
  ],

  rebase: [
    {
      value: "origin-branch",
      label: i18n.t("options.secondary.rebase.origin-branch.label"),
      usage: "git pull --rebase origin <branch name>",
      nb: i18n.t("options.secondary.rebase.origin-branch.nb"),
    },
    {
      value: "local-branch",
      label: i18n.t("options.secondary.rebase.local-branch.label"),
      usage: "git rebase <branch name>",
      nb: i18n.t("options.secondary.rebase.local-branch.nb"),
    },
    {
      value: "skip",
      label: i18n.t("options.secondary.rebase.skip.label"),
      usage: "git rebase --skip",
      nb: i18n.t("options.secondary.rebase.skip.nb"),
    },
    {
      value: "continue",
      label: i18n.t("options.secondary.rebase.continue.label"),
      usage: "git rebase --continue",
      nb: i18n.t("options.secondary.rebase.continue.nb"),
    },
  ],

  synchronize: [
    {
      value: "branch-from-fork",
      label: i18n.t("options.secondary.synchronize.branch-from-fork.label"),
      usage:
        "git fetch <remote-repo> \n\ngit checkout <branch-name> \n\ngit merge <remote-repo>/<branch-name>",
      nb: i18n.t("options.secondary.synchronize.branch-from-fork.nb"),
    },
  ],
  stash: [
    {
      value: "save-stash",
      label: i18n.t("options.secondary.stash.save-stash.label"),
      usage: "git stash",
      nb: i18n.t("options.secondary.stash.save-stash.nb"),
    },
    {
      value: "list-stash",
      label: i18n.t("options.secondary.stash.list-stash.label"),
      usage: "git stash list",
    },
    {
      value: "apply-stash",
      label: i18n.t("options.secondary.stash.apply-stash.label"),
    },
    {
      value: "show",
      label: i18n.t("options.secondary.stash.show.label"),
      usage: "git stash show -p <stash id>",
      nb: i18n.t("options.secondary.stash.show.nb"),
    },
    {
      value: "delete-stash",
      label: i18n.t("options.secondary.stash.delete-stash.label"),
    },
    {
      value: "create-branch",
      label: i18n.t("options.secondary.stash.create-branch.label"),
      usage: "git stash branch <branch name> <stash id>",
    },
  ],

  cherrypick: [
    {
      value: "origin-branch",
      label: i18n.t("options.secondary.cherrypick.origin-branch.label"),
      usage: "git cherry-pick <commit-hash> <commit-hash>",
      nb: i18n.t("options.secondary.cherrypick.origin-branch.nb"),
    },
  ],
});
