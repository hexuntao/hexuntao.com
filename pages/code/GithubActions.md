---
title: GitHub Actions 自动化
---

# GitHub Actions 自动化

GitHub Actions 是 GitHub 提供的一种自动化工具，可以帮助你在代码仓库中设置一些自动化的流程，例如自动构建、测试、部署等。在本文中，我将介绍如何使用 GitHub Actions 来自动化你的 GitHub 项目。

## 创建一个 GitHub Actions 工作流程

首先，在你的 GitHub 仓库中创建一个`.github/workflows`文件夹，然后在其中创建一个`.yml`文件，例如`build.yml`。这个文件将是你的 GitHub Actions 工作流程的配置文件。

以下是一个简单的`build.yml`文件：

```yaml
name: Build and Test

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Test
      run: npm run test
```

这个配置文件指定了一个工作流程，它会在每次代码推送到仓库时运行。工作流程包含一个作业（job），该作业定义了运行环境和一系列步骤（steps），这些步骤定义了如何执行构建和测试任务。

在上面的示例中，作业名称为`build`，它将在`ubuntu-latest`操作系统上运行。它包含了四个步骤：

- `Checkout code`：使用`actions/checkout`操作来检出代码到工作目录中。
- `Install dependencies`：使用`npm install`命令安装项目所需的依赖项。
- `Build`：使用`npm run build`命令构建项目。
- `Test`：使用`npm run test`命令运行测试。

当工作流程运行时，GitHub 将按照上述步骤逐一执行，如果有任何步骤失败，则整个工作流程将被标记为失败。

## 触发工作流程

默认情况下，工作流程会在每次代码推送到仓库时运行，但你也可以通过其他方式来触发工作流程。例如，你可以在 Pull Request 合并到主分支后自动运行工作流程，或者在定时间隔内运行工作流程。

以下是一个例子，当有人提交了一个 Pull Request 时，工作流程将自动运行：

```yaml
name: Build and Test on Pull Request

on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Test
      run: npm run test
```

在这个配置文件中，`on`关键字指定了触发工作流程的事件是 Pull Request 的提交，并且只有当提交的分支是`main`分支时才会运行工作流程。

## 使用自定义环境变量

在工作流程中，你可能需要使用一些敏感信息，例如 API 密钥或密码。为了避免将这些敏感信息直接嵌入到工作流程中，你可以使用 GitHub 提供的 Secrets 功能。

Secrets 是一种安全地存储和管理敏感信息的方法，它们可以在工作流程中使用。在你的仓库设置中，你可以创建和管理 Secrets。

以下是一个使用 Secrets 的例子，该工作流程需要使用一个名为`API_KEY`的密钥：

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.DEPLOY_KEY }}
          publish_dir: ./build
        env:
          API_KEY: ${{ secrets.API_KEY }}
```

在上面的配置文件中，我们使用了一个名为`DEPLOY_KEY`的 Secrets，它将用于部署到 GitHub Pages。此外，我们还定义了一个名为`API_KEY`的环境变量，并将其设置为从 Secrets 中获取。这样可以避免将敏感信息暴露在工作流程中。

## 结论

GitHub Actions 是一种强大的自动化工具，可以帮助你在 GitHub 仓库中设置一些自动化的流程。通过使用 GitHub Actions，你可以自动构建、测试、部署你的项目，并且可以定制化地设置工作流程。希望本文能够帮助你开始使用 GitHub Actions 并加快你的开发流程！
