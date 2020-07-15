import React from "react";
import { Button, Form } from "react-bootstrap";
import { useGlobalState } from "store/store";
import { settingSettings } from "store/actions";
import "components/Modal/style.scss";

function Modal({ setShowModal }) {
  const [settings] = useGlobalState("settings");
  const { wordsPerDay, optional } = settings;
  const {
    maxWords,
    isMixWords,
    isPicture,
    isTranscript,
    isAutoPronunciation,
    isShowBtn,
    isWordTranslation,
    isSentencesTranslation,
    isMeaningSentence,
    isExampleSentence,
    isDeleteBtn,
    isHardWordBtn,
  } = optional;

  const handleCheckboxSetSettings = (e) => {
    const newSettings = {
      ...settings,
      optional: {
        ...optional,
        [e.currentTarget.name]: e.currentTarget.checked,
      },
    };
    if (
      !newSettings.optional.isWordTranslation &&
      !newSettings.optional.isMeaningSentence &&
      !newSettings.optional.isExampleSentence
    ) {
      newSettings.optional.isWordTranslation = true;
    }
    settingSettings(newSettings);
  };

  const handleMaxWordsSetSettings = (e) => {
    const newSettings = {
      ...settings,
      optional: {
        ...optional,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    };
    settingSettings(newSettings);
  };

  const handleWordsPerDaySetSettings = (e) => {
    const newSettings = { ...settings, wordsPerDay: e.currentTarget.value };
    settingSettings(newSettings);
  };

  return (
    <div className="modal-settings">
      <Button
        variant="outline-primary"
        className="modal-settings-btn"
        onClick={() => setShowModal(false)}
      >
        &#10008;
      </Button>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Word count for today</Form.Label>
          <Form.Control
            as="select"
            value={wordsPerDay}
            onChange={handleWordsPerDaySetSettings}
          >
            <option>20</option>
            <option>40</option>
            <option>60</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Maximum number of words for today</Form.Label>
          <Form.Control
            as="select"
            value={maxWords}
            name="maxWords"
            onChange={handleMaxWordsSetSettings}
          >
            <option>40</option>
            <option>60</option>
            <option>80</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Mix my and new words"
            name="isMixWords"
            checked={isMixWords}
            onChange={handleCheckboxSetSettings}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect3">
          Select at least one word option:
          <Form.Check
            name="isWordTranslation"
            label="translation of word"
            type="checkbox"
            checked={isWordTranslation}
            id="checkbox-1"
            onChange={handleCheckboxSetSettings}
          />
          <Form.Check
            name="isMeaningSentence"
            label="meaning sentence"
            type="checkbox"
            checked={isMeaningSentence}
            id="checkbox-2"
            onChange={handleCheckboxSetSettings}
          />
          <Form.Check
            name="isExampleSentence"
            label="example sentence"
            type="checkbox"
            checked={isExampleSentence}
            id="checkbox-3"
            onChange={handleCheckboxSetSettings}
          />
          <Form.Check
            name="isSentencesTranslation"
            label="translation of example, meaning sentences"
            type="checkbox"
            checked={isSentencesTranslation}
            id="checkbox-4"
            onChange={handleCheckboxSetSettings}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            name="isPicture"
            label="show picture"
            type="checkbox"
            checked={isPicture}
            id="checkbox-5"
            onChange={handleCheckboxSetSettings}
          />
          <Form.Check
            label="show transcript"
            name="isTranscript"
            checked={isTranscript}
            onChange={handleCheckboxSetSettings}
            type="checkbox"
            id="checkbox-6"
          />
          <Form.Check
            label="enable auto pronunciation"
            name="isAutoPronunciation"
            checked={isAutoPronunciation}
            onChange={handleCheckboxSetSettings}
            type="checkbox"
            id="checkbox-7"
          />
          <Form.Check
            label="show answer button"
            name="isShowBtn"
            checked={isShowBtn}
            onChange={handleCheckboxSetSettings}
            type="checkbox"
            id="checkbox-8"
          />
          <Form.Check
            label="delete word button"
            name="isDeleteBtn"
            checked={isDeleteBtn}
            onChange={handleCheckboxSetSettings}
            type="checkbox"
            id="checkbox-9"
          />
          <Form.Check
            label="hardWord answer button"
            name="isHardWordBtn"
            checked={isHardWordBtn}
            onChange={handleCheckboxSetSettings}
            type="checkbox"
            id="checkbox-10"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default React.memo(Modal);
