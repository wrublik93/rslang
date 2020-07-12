import React from "react";
import { Form } from "react-bootstrap";
import { DIFFICULTY_ARRAY, LEVELS_ARRAY, PAGES_ARRAY } from "../../constants";
import "pages/OurCustomGame/components/Menu/style.scss";

function Menu({ setDifficulty, difficulty, level, setLevel, setPage, page }) {
  const onDifficultyChangeHanddle = (e) => setDifficulty(+e.target.value);
  const onLevelChangeHanddle = (e) => {
    setLevel(+e.target.value);
  };
  const onPageChangeHanddle = (e) => {
    setPage(+e.target.value);
  };

  return (
    <Form className="menu-container">
      <Form.Group
        controlId="exampleForm.ControlSelect1"
        className="menu-container-item"
      >
        <Form.Label>Difficulty</Form.Label>
        <div>
          {DIFFICULTY_ARRAY.map((item) => (
            <Form.Check
              inline
              label={item}
              type="radio"
              key={item}
              value={item}
              checked={item === difficulty}
              onChange={onDifficultyChangeHanddle}
            />
          ))}
        </div>
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlCheck1"
        className="menu-container-item"
      >
        <Form.Label>Level</Form.Label>
        <Form.Control as="select" onChange={onLevelChangeHanddle} value={level}>
          {LEVELS_ARRAY.map((item) => (
            <option key={item} value={item}>
              {item + 1}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlCheck1"
        className="menu-container-item"
      >
        <Form.Label>Page</Form.Label>
        <Form.Control as="select" onChange={onPageChangeHanddle} value={page}>
          {PAGES_ARRAY.map((item) => (
            <option key={item} value={item}>
              {item + 1}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default React.memo(Menu);
