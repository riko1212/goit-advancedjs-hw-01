const FEEDBACK_STORAGE_KEY = 'feedback-form-data';

const feedbackState = {
  email: '',
  message: '',
};

const clearFeedbackState = state => {
  Object.keys(state).forEach(key => {
    state[key] = '';
  });
};

const loadFeedbackState = () => {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));
  if (!savedData) return feedbackState;

  Object.keys(savedData).forEach(key => {
    feedbackState[key] = savedData[key];
  });

  return feedbackState;
};

const isFeedbackStateValid = () => {
  const state = loadFeedbackState();
  return Object.values(state).every(value => value);
};

const populateFeedbackForm = form => {
  const state = loadFeedbackState();
  Object.keys(state).forEach(key => {
    form[key].value = state[key];
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.querySelector('.feedback-form');

  feedbackForm.addEventListener('input', event => {
    feedbackState[event.target.name] = event.target.value.trim();
    localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedbackState));
  });

  populateFeedbackForm(feedbackForm);

  feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    if (isFeedbackStateValid()) {
      console.log(feedbackState);
      localStorage.removeItem(FEEDBACK_STORAGE_KEY);
      feedbackForm.reset();
      clearFeedbackState(feedbackState);
    } else {
      alert('Please fill in all fields.');
    }
  });
});
