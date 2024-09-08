import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: []
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = Array.isArray(tasks[source.droppableId]) ? [...tasks[source.droppableId]] : [];
    const destinationColumn = Array.isArray(tasks[destination.droppableId]) ? [...tasks[destination.droppableId]] : [];
    const [removed] = sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn
    });
  };

  const addTask = (columnId, taskContent) => {
    if (!Array.isArray(tasks[columnId])) {
      setTasks({
        ...tasks,
        [columnId]: []
      });
    }

    setTasks((prevTasks) => ({
      ...prevTasks,
      [columnId]: [...prevTasks[columnId], { id: Date.now().toString(), content: taskContent }]
    }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardContainer>
        <TaskColumn title="To Do" columnId="todo" tasks={tasks.todo} addTask={addTask} />
        <TaskColumn title="In Progress" columnId="inProgress" tasks={tasks.inProgress} addTask={addTask} />
        <TaskColumn title="Done" columnId="done" tasks={tasks.done} addTask={addTask} />
      </BoardContainer>
    </DragDropContext>
  );
};

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export default TaskBoard;
