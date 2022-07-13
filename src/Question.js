/* eslint-disable no-restricted-globals */
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Container, MenuItem, IconButton, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Question = () => {
  const [questionData, setQuestionData] = useState({
    survey: "",
    description: "",
    questionType: "",
    question: [
      {
        placeholder: "",
        min: "",
        max: "",
        step: "",
        rows: "",
      },
    ],
  });

  const answerType = [
    "none",
    "Number",
    "TextArea",
    "Radio",
    "CheckBox",
    "Select",
    "Slider",
  ];

  const handleSurveyTitleChange = (event) => {
    setQuestionData((prev) => ({
      ...prev,
      survey: event.target.value,
    }));
  };
  const handleQuestionDescChange = (event) => {
    setQuestionData((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const handleQuestionType = (e) => {
    setQuestionData((prev) => ({
      ...prev,
      questionType: e.target.value,
    }));
  };

  const handleChangeInput = (index, event) => {
    const values = [...questionData.question];
    values[index][event.target.name] = event.target.value;
    setQuestionData((prev) => ({
      ...prev,
      question: values,
    }));
  };

  const handleAddQuestions = () => {
    setQuestionData((prev) => ({
      ...prev,
      question: [
        ...prev.question,
        {
          placeholder: "",
          min: "",
          max: "",
          step: "",
        },
      ],
    }));
  };

  const handleRemoveClick = (index) => {
    const values = [...questionData.question];
    values.splice(index, 1);
    setQuestionData((prev) => ({
      ...prev,
      question: values,
    }));
  };

  const handleSubmit = () => {
    console.log(questionData);

    toast.success("Question Submited Succesfully");

    setQuestionData((prev) => ({
      ...prev,
      survey: "",
      description: "",
      questionType: "",
      question: [
        {
          placeholder: "",
          min: "",
          max: "",
          step: "",
          rows: "",
        },
      ],
    }));
  };

  return (
    <div>
      <h2>Add Question</h2>
      <form action="">
        <Box m={2}>
          <TextField
            name="SurveyTitle"
            label="SurveyTitle"
            variant="filled"
            fullWidth
            value={questionData.survey}
            onChange={handleSurveyTitleChange}
            //value={questionData.survey}
          />
        </Box>

        <Box m={2}>
          <TextField
            name="QuestionDescription"
            label="Question Description"
            variant="filled"
            fullWidth
            value={questionData.description}
            onChange={handleQuestionDescChange}
          />
        </Box>
        <Box m={2}>
          <TextField
            select
            label="Answer Type"
            variant="filled"
            fullWidth
            value={questionData.questionType}
            onChange={handleQuestionType}
          >
            {answerType.map((questionType, index) => {
              return (
                <MenuItem key={index} value={questionType}>
                  {questionType}
                </MenuItem>
              );
            })}
          </TextField>
        </Box>

        {/* {questionData.question.map((data) => {
          console.log(data);
        })}
        {console.log(questionData)} */}

        {questionData.question.map((questionInput, index) => {
          if (questionData.questionType === "Number") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    type="number"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "20%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  <TextField
                    size="s"
                    name="min"
                    type="number"
                    label="Min"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="max"
                    type="number"
                    label="Max"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="step"
                    type="number"
                    label="Step"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          } else if (questionData.questionType === "Radio") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "40%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          } else if (questionData.questionType === "CheckBox") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "40%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          } else if (questionData.questionType === "Select") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "40%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          } else if (questionData.questionType === "Slider") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "20%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  <TextField
                    size="s"
                    name="min"
                    label="Min"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="max"
                    label="Max"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          }
          if (questionData.questionType === "TextArea") {
            return (
              <Container key={index}>
                <Box fullWidth bgcolor="white">
                  <p className="option">Option {index + 1}</p>
                  <TextField
                    name="placeholder"
                    label="PlaceHolder"
                    sx={{ margin: 2, width: "20%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  <TextField
                    size="s"
                    name="min"
                    label="Min"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="max"
                    label="Max"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                  <TextField
                    name="rows"
                    type="number"
                    label="Rows"
                    sx={{ margin: 2, width: "15%" }}
                    onChange={(event) => handleChangeInput(index, event)}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={(event) => handleRemoveClick(index)}
                      sx={{ marginTop: "18px" }}
                    >
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  )}
                </Box>
                {index == questionData.question.length - 1 && (
                  <IconButton
                    sx={{ marginLeft: "95%" }}
                    onClick={handleAddQuestions}
                  >
                    <AddCircleOutlineIcon style={{ color: "green" }} />
                  </IconButton>
                )}
              </Container>
            );
          }
        })}

        <Button
          sx={{ marginLeft: "10px", marginBottom: "10px" }}
          style={{ color: "white", backgroundColor: "#124116" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};
