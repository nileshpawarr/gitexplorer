import i18n from "../i18n";

const options = (): {
  value: string;
  label: string;
}[] => [
  { value: "add", label: i18n.t("options.primary.add") },
  { value: "commit", label: i18n.t("options.primary.commit") },
  { value: "revert", label: i18n.t("options.primary.revert") },
  { value: "initialize", label: i18n.t("options.primary.initialize") },
  { value: "modify", label: i18n.t("options.primary.modify") },
  { value: "show", label: i18n.t("options.primary.show") },
  { value: "delete", label: i18n.t("options.primary.delete") },
  { value: "compareCommits", label: i18n.t("options.primary.compareCommits") },
  { value: "configure", label: i18n.t("options.primary.configure") },
  { value: "clone", label: i18n.t("options.primary.clone") },
  { value: "ignore", label: i18n.t("options.primary.ignore") },
  { value: "rename", label: i18n.t("options.primary.rename") },
  { value: "merge", label: i18n.t("options.primary.merge") },
  { value: "squash", label: i18n.t("options.primary.squash") },
  { value: "stash", label: i18n.t("options.primary.stash") },
  { value: "debug", label: i18n.t("options.primary.debug") },
  { value: "recover", label: i18n.t("options.primary.recover") },
  { value: "synchronize", label: i18n.t("options.primary.synchronize") },
  { value: "rebase", label: i18n.t("options.primary.rebase") },
  { value: "cherrypick", label: i18n.t("options.primary.cherrypick") },
];

export const primaryOptions = () =>
  options().sort((x, y) => {
    if (x.value < y.value) {
      return -1;
    }
    if (x.value > y.value) {
      return 1;
    }
    return 0;
  });
