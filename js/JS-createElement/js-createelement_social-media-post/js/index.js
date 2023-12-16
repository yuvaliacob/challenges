console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("section");
post.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);

document.body.append(post);
post.append(postContent);
post.append(postFooter);
postFooter.append(username);
postFooter.append(postButton);

// From original HTML file

/* <section class="post">
  <p class="post__content">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <footer class="post__footer">
    <span class="post__username">@username</span>
    <button type="button" class="post__button" data-js="like-button">
      ♥ Like
    </button>
  </footer>
</section>; */
