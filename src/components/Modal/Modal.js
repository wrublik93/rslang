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
    mixWords,
    translation,
    meaning,
    textExampl,
    picture,
    transcript,
    autopronunciation,
    showBtn,
  } = optional;

  const handdleChecboxSetSettings = (e) => {
    const newSettings = {
      ...settings,
      optional: {
        ...optional,
        [e.currentTarget.name]: e.currentTarget.checked,
      },
    };
    if (
      !newSettings.optional.translation &&
      !newSettings.optional.meaning &&
      !newSettings.optional.textExampl
    ) {
      newSettings.optional.translation = true;
    }
    settingSettings(newSettings);
  };

  const handdleMaxWordsSetSettings = (e) => {
    const newSettings = {
      ...settings,
      optional: {
        ...optional,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    };
    settingSettings(newSettings);
  };

  const handdleWordsPerDaySetSettings = (e) => {
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
            onChange={handdleWordsPerDaySetSettings}
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
            onChange={handdleMaxWordsSetSettings}
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
            name="mixWords"
            checked={mixWords}
            onChange={handdleChecboxSetSettings}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect3">
          Select at least one word option:
          <Form.Check
            name="translation"
            label="translation"
            type="checkbox"
            checked={translation}
            id="checkbox-1"
            onChange={handdleChecboxSetSettings}
          />
          <Form.Check
            name="meaning"
            label="meaning"
            type="checkbox"
            checked={meaning}
            id="checkbox-2"
            onChange={handdleChecboxSetSettings}
          />
          <Form.Check
            name="textExampl"
            label="text example"
            type="checkbox"
            checked={textExampl}
            id="checkbox-3"
            onChange={handdleChecboxSetSettings}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            name="picture"
            label="show picture"
            type="checkbox"
            checked={picture}
            id="checkbox-4"
            onChange={handdleChecboxSetSettings}
          />
          <Form.Check
            label="show transcript"
            name="transcript"
            checked={transcript}
            onChange={handdleChecboxSetSettings}
            type="checkbox"
            id="checkbox-5"
          />
          <Form.Check
            label="autopronunciation"
            name="autopronunciation"
            checked={autopronunciation}
            onChange={handdleChecboxSetSettings}
            type="checkbox"
            id="checkbox-6"
          />
          <Form.Check
            label="show answer button"
            name="showBtn"
            checked={showBtn}
            onChange={handdleChecboxSetSettings}
            type="checkbox"
            id="checkbox-7"
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default React.memo(Modal);
