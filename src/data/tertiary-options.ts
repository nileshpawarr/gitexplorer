import i18n from "../i18n";
import { OptionType } from "./secondary-options";

export const tertiaryOptions = (): { [key: string]: OptionType[] } => ({
  logs: [
    {
      value: "all",
      label: i18n.t("options.tertiary.logs.all.label"),
      usage: "git log",
      nb: i18n.t("options.tertiary.logs.all.nb"),
    },
    {
      value: "last-n-commit",
      label: i18n.t("options.tertiary.logs.last-n-commit.label"),
      usage: "git log -n",
      nb: i18n.t("options.tertiary.logs.last-n-commit.nb"),
    },
    {
      value: "particular-period",
      label: i18n.t("options.tertiary.logs.particular-period.label"),
      usage: "git log --since=period",
      nb: i18n.t("options.tertiary.logs.particular-period.nb"),
    },
    {
      value: "commit-on-oneline",
      label: i18n.t("options.tertiary.logs.commit-on-oneline.label"),
      usage: "git log --oneline",
    },
    {
      value: "patches-introduced",
      label: i18n.t("options.tertiary.logs.patches-introduced.label"),
      usage: "git log -p",
    },
  ],
  branch: [
    {
      value: "in",
      label: i18n.t("options.tertiary.branch.in.label"),
      usage: "git branch -m <new name>",
    },
    {
      value: "outside",
      label: i18n.t("options.tertiary.branch.outside.label"),
      usage: "git branch -m <old name> <new name>",
    },
  ],
  "add-new-branch": [
    {
      value: "no-checkout",
      label: i18n.t("options.tertiary.add-new-branch.no-checkout.label"),
      usage: "git branch <new name>",
    },
    {
      value: "checkout",
      label: i18n.t("options.tertiary.add-new-branch.checkout.label"),
      usage: "git checkout -b <new name>",
    },
    {
      value: "checkout-remote",
      label: i18n.t("options.tertiary.add-new-branch.checkout-remote.label"),
      usage: "git checkout -b <new name> <another branch>",
    },
  ],
  "apply-stash": [
    {
      value: "latest",
      label: i18n.t("options.tertiary.apply-stash.latest.label"),
      usage: "git stash apply",
    },
    {
      value: "specific",
      label: i18n.t("options.tertiary.apply-stash.specific.label"),
      usage: "git stash apply <stash id>",
      nb: i18n.t("options.tertiary.apply-stash.specific.nb"),
    },
    {
      value: "pop",
      label: i18n.t("options.tertiary.apply-stash.pop.label"),
      usage: "git stash pop <stash id>",
      nb: i18n.t("options.tertiary.apply-stash.pop.nb"),
    },
  ],
  "delete-stash": [
    {
      value: "all",
      label: i18n.t("options.tertiary.delete-stash.all.label"),
      usage: "git stash clear",
    },
    {
      value: "specific",
      label: i18n.t("options.tertiary.delete-stash.specific.label"),
      usage: "git stash drop <stash id>",
    },
  ],
  "delete-multiple-branches": [
    {
      value: "name",
      label: i18n.t("options.tertiary.delete-multiple-branches.name.label"),
      usage: "git branch -D <branch name> <branch name> <branch name>",
    },
    {
      value: "pattern",
      label: i18n.t("options.tertiary.delete-multiple-branches.pattern.label"),
      usage: "git branch | grep <regex pattern> | xargs git branch -D",
      nb: i18n.t("options.tertiary.delete-multiple-branches.pattern.nb"),
    },
  ],
});
