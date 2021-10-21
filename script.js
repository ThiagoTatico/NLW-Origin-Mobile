const socialMediaLinks = {
  github: 'ThiagoTatico',
  linkedin: '/in/thiago-tatico-0b9057216/',
  facebook: 'thiago.tatic0',
  instagram: 'thiagotatico',
  twitter: 'DankanVitlock'
}

// Insert Social Media in HTML
function insertSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

insertSocialMediaLinks()
