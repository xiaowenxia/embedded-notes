

# Commit message format

*其他语言版本: [English](CONTRIBUTING.md), [简体中文](CONTRIBUTING.zh-cn.md).*

## 1. Title (Header)

**（1）type**

`type` 用于说明 commit 的类别，只允许使用下面 7 个标识。

>- feat: New feature 新功能
- fix: Fix bug 修补 bug
- docs: Documentation 文档
- style: Format 格式（不影响代码运行的变动）
- refactor: Refactor 重构（即不是新增功能，也不是修改 bug 的代码变动）
- test: Test 增加测试
- chore: 构建过程或辅助工具的变动

**（2）scope**

`scope` 用于说明 commit 影响的范围，比如 sns，lang，share。

`scope` 紧接 `type` 置于 `()` 之内。

**（3）subject**

`subject` 是 commit 目的的简短描述，不超过 50 个字符。

>- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）

---
Title 可参考 #119 `refactor(sns): simplify conditional display`

## 2. Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

>More detailed explanatory text, if necessary.  Wrap it to
about 72 characters or so.

>Further paragraphs come after blank lines.

>- Bullet points are okay, too
- Use a hanging indent

有两个注意点：

（1）使用第一人称现在时，比如使用 `change` 而不是 `changed` 或 `changes`。

（2）应该说明代码变动的动机，以及与以前行为的对比。

## 3. Footer

Footer 部分只用于两种情况。

**（1）不兼容变动**

如果当前代码与上一个版本不兼容，则 Footer 部分以 `BREAKING CHANGE` 开头，后面是对变动的描述、以及变动理由和迁移方法。

    BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
        myAttr: 'attribute',
    }

    After:

    scope: {
        myAttr: '@',
    }

    The removed `inject` wasn't generally useful for directives so there should be no code using it.

**（2）关闭 Issue**

如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue 。

    Closes #234

也可以一次关闭多个 issue 。

    Closes #123, #245, #992

## 4. Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 `revert:` 开头，后面跟着被撤销 Commit 的 Header。

    revert: feat(pencil): add 'graphiteWidth' option

    This reverts commit 667ecc1654a317a13331b17617d973392f415f02.

Body 部分的格式是固定的，必须写成 `This reverts commit <hash>.`，其中的 `hash` 是被撤销 commit 的 SHA 标识符。

如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的 `Reverts` 小标题下面。
