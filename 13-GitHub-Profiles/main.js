const profilesContainer = document.querySelector(".profiles-container");
const input = document.querySelector("input");
const loader = document.querySelector(".loader-wrapper");
const githubUserPage = document.querySelector(".github-user-page");
const userAvatar = document.querySelector(".user-avatar");
const userFullName = document.querySelector(".user-info h1");
const userUsername = document.querySelector(".user-info p");
const userType = document.querySelector(".user-type");
const statNumbers = document.querySelectorAll(".stat-item h2");
const detailValues = document.querySelectorAll(".detail-box p");
const visitProfileBtn = document.querySelector(".visit-profile-btn");
const header = document.querySelector("header");
const main = document.querySelector("main");
const backBtn = document.querySelector(".back-btn");

const createProfile = (data) => {
    const fragment = document.createDocumentFragment();
    
    data.forEach((profile) => {
        const profileCard = document.createElement("article");
        profileCard.classList.add("profile-card")

        const image = document.createElement("img");
        image.src = profile.avatar_url;

        const name = document.createElement("h2");
        name.textContent = profile.login;

        const visitProfile = document.createElement("a");
        visitProfile.href = profile.html_url;
        visitProfile.target = "_blank";
        visitProfile.textContent = "Visit GitHub Profile"

        profileCard.append(image, name, visitProfile);
        fragment.append(profileCard)
    })

    profilesContainer.append(fragment);
}
    
const fetchGithubProfiles = async (count = 20) => {
    try {
        loader.style.display = "flex";
        profilesContainer.innerHTML = "";

        const response = await fetch(`https://api.github.com/users?per_page=${count}&since=${Math.floor(Math.random() * 4000) + 1}`);
        const data = await response.json();
        createProfile(data)
    } catch (error) {
        console.log(error);
    } finally {
        loader.style.display = "none";
    }
}

fetchGithubProfiles();

let id = null;

input.addEventListener("input", () => {
    clearTimeout(id);
    id = setTimeout(() => {
        fetchGithubProfiles(Number(input.value))
    }, 500);
})

const renderProfile = (profileData) => {
    userAvatar.src = profileData.avatar_url;
    userAvatar.alt = profileData.login;

    userFullName.textContent = profileData.name;
    userUsername.textContent = `@${profileData.login}`;
    userType.textContent = profileData.type;

    statNumbers[0].textContent = profileData.followers;
    statNumbers[1].textContent = profileData.following;
    statNumbers[2].textContent = profileData.public_repos;
    statNumbers[3].textContent = profileData.public_gists;

    detailValues[0].textContent = profileData.name || profileData.login;;
    detailValues[1].textContent = profileData.blog ? profileData.blog.replace("https://", "") : "Not Available"; 
    detailValues[2].textContent = profileData.created_at
    detailValues[3].textContent = profileData.updated_at

    visitProfileBtn.href = profileData.html_url;
}


profilesContainer.addEventListener("click", async (event) => {
    if (event.target.closest("a")) return;

    const article = event.target.closest(".profile-card");   
    
    if (!article) return;
    
    const profileName = article.querySelector("h2").textContent;
    try {
        githubUserPage.classList.add("hidden");
        loader.style.display = "flex";
        header.classList.add("hiiden")
        main.classList.add("hidden");
        const profileResponse = await fetch(`https://api.github.com/users/${profileName}`);
        const profileData = await profileResponse.json();
    
        renderProfile(profileData);
    } catch (error) {
        console.log(error)
    } finally {
        loader.style.display = "none";
        githubUserPage.classList.remove("hidden");
    }
    
})


backBtn.addEventListener("click", () => {
    githubUserPage.classList.add("hidden");
    header.classList.remove("hidden")
    main.classList.remove("hidden");
})