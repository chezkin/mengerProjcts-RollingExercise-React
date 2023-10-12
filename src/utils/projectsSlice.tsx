import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Project from '../types/ProjectType'

import {
  project1,
  project2,
  project3,
  project4
} from '../db/dbDefult'

export interface ProjectState {
  value: Project[];
}

const initialState: ProjectState = {
  value: [project1, project2, project3, project4],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    createNewProject: (state, action: PayloadAction<string>) => {
      const newProject = {
        name: action.payload,
        tasks: []
      }
      const projects = [...state.value , newProject]
      state.value = projects
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNewProject } = counterSlice.actions

export default counterSlice.reducer