# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.

## How to Contribute

1. Fork the repository
2. Make the fix 
3. Submit a pull request to the project owner.

### Fork the repository

Forking a repository is a simple two-step process.
1. On GitHub, navigate to the cytoai/cyto repository.
2. In the top-right corner of the page, click Fork.

### Keep your fork synced

You might fork a project in order to propose changes to the upstream, or original, repository. In this case, it's good practice to regularly sync your fork with the upstream repository. To do this, you'll need to use Git on the command line. You can practice setting the upstream repository using the same cytoai/cyto repository you just forked!

#### Step 1: Create a local clone of your fork

1. On GitHub, navigate to your fork of the cyto repository.

2. Under the repository name, click Clone or download.

3. In the Clone with HTTPs section, click the copy to clipboard symbol to copy the clone URL for the repository.

4. Open Terminal.

5. Type git clone, and then paste the URL you copied in Step 2. It will look like this, with your GitHub username instead of YOUR-USERNAME: 
``` 
git clone https://github.com/YOUR-USERNAME/cyto
```
6. Press Enter. Your local clone will be created.

Now, you have a local copy of your fork of the cyto repository!

#### Step 2: Configure Git to sync your fork with the original cyto repository

When you fork a project in order to propose changes to the original repository, you can configure Git to pull changes from the original, or upstream, repository into the local clone of your fork.

1. On GitHub, navigate to the cytoai/cyto repository.

2. Under the repository name, click Clone or download

3. In the Clone with HTTPs section, click the copy to clipboard symbol to copy the clone URL for the repository.

4. Open Terminal.

5. Change directories to the location of the fork you cloned in **Step 1: Create a local clone of your fork**.

6. Type ``` git remote -v ``` and press Enter. You'll see the current configured remote repository for your fork.

7. Type ``` git remote add upstream ```, and then paste the URL you copied in Step 2 and press Enter. It will look like this:
``` git remote add upstream https://github.com/cytoai/cyto.git ```

8. To verify the new upstream repository you've specified for your fork, type ``` git remote -v ``` again. You should see the URL for your fork as origin, and the URL for the original repository as upstream.

Now, you can keep your fork synced with the upstream repository with a few Git commands. 

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
