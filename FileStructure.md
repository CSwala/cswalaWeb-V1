./src
  ├── assets		#Any assets(img/css/fonts) that are imported into your components.
  │   ├── img 
  │   │   └── ...
  │   ├── css
  │   │   └── ...
  │   ├── fonts
  │   │   └── ...
  ├── components	#All the components of the projects that are not the main views.
  │   ├── NavBar.vue
  │   ├── Footer.vue
  │   ├── LinkPreview.vue
  │   ├── VCard.vue
  │   └── ...
  ├── mixins (js)	#Parts of javascript code that is reused in different components.
  │   └── ...
  ├── router		#All the routes of the website.
  │   └── index.js
  ├── views		#All the views of different pages.
  │   ├── Admin
  │   │   ├─ index.vue
  │   │   ├─ ResourceReview.vue
  │   ├── User
  │   │   ├─ Login.vue
  │   │   ├─ Register.vue
  │   │   ├─ EditProfile.vue 
  │   │   ├─ AddResources.vue
  │   ├── HomePage.vue
  │   ├── AboutPage.vue
  │   ├── DetailPage.vue
  │   ├── ExplorePage.vue
  │   ├── HackFeed.vue (LatestNews/Events)
  │   ├── JobHuntPage.vue (JobPortals/Opportunities)
  │   ├── Community.vue (Disscusion/Messages)
  │   ├── 404.vue
  │   └── ...
  ├── App.vue
  ├── main.js