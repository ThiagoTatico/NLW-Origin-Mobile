const socialMediaLinks = {
  github: 'ThiagoTatico',
  linkedin: 'school/rocketseat',
  facebook: 'rocketseat',
  instagram: 'rocketseat_oficial',
  twitter: 'rocketseat'
}

// Insert Social Media in HTML
function insertSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

insertSocialMediaLinks()

//Get Github profile infos by Github API
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      githubLink.href = data.html_url
      githubLogin.textContent = data.login
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
