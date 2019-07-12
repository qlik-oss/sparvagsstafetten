# Spårvägsstafetten
> Web site about a charity race &#x2013; "Spårvägsstafetten" &#x2013; a running relay race along the tramway in Lund, Sweden, organized by [IFK Lund](http://www.ifklund.se) and sponsored by Qlik.


<div style="float:left; margin-right:25px;">
<strong>Contents</strong>

<!-- toc -->

- [General](#general)
  * [Language](#language)
  * [License](#license)
- [Contributing](#contributing)
  * [Prerequisites](#prerequisites)
  * [How to contribute code/content](#how-to-contribute-codecontent)
    + [Qlik employees](#qlik-employees)
    + [Non-Qlik contributors](#non-qlik-contributors)
    + [Qlik employees](#qlik-employees-1)
    + [Non-Qlik contributors](#non-qlik-contributors-1)
  * [How to suggest improvements/report bugs](#how-to-suggest-improvementsreport-bugs)
- [Publishing](#publishing)
  * [Approval](#approval)
  * [Automation](#automation)
  * [Versions](#versions)

<!-- tocstop -->

</div>

## General
### Language
Issues and comments should be in English in this repo, to enable non-Swedish speaking contributors to participate in development.
### License
This repo is hosted under **qlik-oss** (the Qlik Open Source Software organization) with an MIT license since all contributions by Qlik employees during working hours are otherwise technically the intellectual property of Qlik.  
<!-- ### Responsibilities -->
## Contributing
### Prerequisites
To contribute content or suggest improvements, you need [to have or sign up for a GitHub account](https://github.com/join?source=prompt-code).

For Qlik employees: request write access to the repo by contacting: [AHN](https://github.com/peol), [FFD](https://github.com/Linguisht), or [LAA](https://github.com/qliklars)

### How to contribute code/content
#### Qlik employees
For contributions during working hours:
* before contributing: confirm available scope with your manager
* after: report time as CR-day (part of) indicating Spårvägsstafetten in description

1. Pick/create an [issue](https://github.com/qlik-oss/sparvagsstafetten/issues?q=is%3Aissue+is%3Aopen) and self-assign it. 
2. Create a branch for your contribution, then a PR to master when done (see [Approval](#approval))

#### Non-Qlik contributors
To contribute, you first need to
* sign a CLA (Contributor License Agreement), since the repo resides under qlik-oss (please contact [Andrée Hansson](https://github.com/peol) for assistance).
* [fork the repo](https://help.github.com/en/articles/fork-a-repo#fork-an-example-repository) to your personal account (non-employees may not be members of qlik-oss and can therefore not create branches directly in the repo).

* Create a branch in your fork for the changes you want to propose 
* If your changes apply to an [open issue](https://github.com/qlik-oss/sparvagsstafetten/issues?q=is%3Aissue+is%3Aopen), comment on the issue with a link to the branch in your fork (so other people know you're working on it).
* When done, create a PR to master in `qlik-oss/sparvagsstafetten`, referencing any relevant issues in the description (see [Approval](#approval)).
### How to suggest improvements/report bugs
Anyone with a GitHub account can suggest improvements or report bugs by creating [a new issue](https://github.com/qlik-oss/sparvagsstafetten/issues/new). Please look at [open issues](https://github.com/qlik-oss/sparvagsstafetten/issues?q=is%3Aopen+is%3Aissue) before reporting a duplicate.
## Publishing
### Approval
All modifications to the web site must be approved by a maintainer (who can merge) and a representative of IFK Lund (for changes impacting design/brand and content).

* All changes involving **visuals or brand (fonts, colors, layout etc)** must be approved by Richard Huldén (gh account TBD).

* All changes involving **facts or sponsors** must be approved by Saga Thornberg (gh account TBD).

### Automation
All PRs to master are automatically deployed with previews (click "Details" on the PR).

As soon as a PR is merged to master, the new version of the website will be deployed to https://spårvägsstafetten.se (hosted under netlify.com).

<!-- ### Versions -->
<!-- ## Guidelines -->
<!-- ### Design -->
