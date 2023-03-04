---
title: Git repo 中重命名文件/目录
---

# 如何在 git repo 中重命名区分大小写的文件/目录？

虽然在 git 中简单的文件/目录重命名不是问题，但是如果你想在你的 git 仓库中重命名一个区分大小写的文件/目录怎么办？

例如，您有一个名为 的文件`README.md`，您希望将其重命名为`Readme.md`.

这时候需要注意，通过**IDE**或**文件管理器重**命名将不起作用，因为 git 无法识别更改。

您可以使用以下命令执行此操作：

```
git mv README.md Readme.md
```

然后按照通常的 git 工作流程进行操作：

```
git add .
git commit -m "Rename README.md to Readme.md"
```

就这样！成功重命名 git 存储库中区分大小写的文件/目录。
