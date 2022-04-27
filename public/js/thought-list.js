const $thoughtList = document.querySelector("#thought-list");

const getThoughtList = () => {
  fetch("/api/thoughts")
    .then((response) => response.json())
    .then((thoughtListArr) => {
      thoughtListArr.forEach(printThought);
    })
    .catch((err) => {
      console.log(err);
    });
};

const printThought = ({ _id, thoughtText, createdAt, username, reactions }) => {
  const thoughtCard = `
  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
  <div class="card card-blog card-plain">
    <div class="card-header p-0 mt-n4 mx-3">
      <a class="d-block shadow-xl border-radius-xl">
        <img
          src="/img/home-decor-1.jpg"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-xl"
        />
      </a>
    </div>
    <div class="card-body p-3">
      <p class="mb-0 text-sm">
        ${createdAt}
      </p>
      <a href="javascript:;">
        <h5>
          ${username}
        </h5>
      </a>
      <p class="mb-4 text-sm">
        ${thoughtText}
      </p>
      <div class="d-flex align-items-center justify-content-between">
        <button type="button" class="btn btn-outline-primary btn-sm mb-0">
          React
        </button>
        <div class="avatar-group mt-2">
          <a
            href="javascript:;"
            class="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Elena Morison"
          >
            <img alt="Image placeholder" src="/img/team-1.jpg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Ryan Milly"
          >
            <img alt="Image placeholder" src="/img/team-2.jpg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Nick Daniel"
          >
            <img alt="Image placeholder" src="/img/team-3.jpg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Peterson"
          >
            <img alt="Image placeholder" src="/img/team-4.jpg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
  $thoughtList.innerHTML += thoughtCard;
};

getThoughtList();
