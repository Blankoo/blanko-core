import express from 'express';
import config from '../config';
import initializeDb from '../config/db';
import tasks from '../services/tasks';
import accounts from '../services/accounts';
import projects from '../services/projects';

const router = express()

// connect
initializeDb(db => {
  router.use('/tasks', tasks({ config, db }));
  router.use('/account', accounts({ config, db }));
  router.use('/projects', projects({ config, db }));

  router.get('/', (req, res) => {
    res.json({
      name: 'Blanko',
      status: 'Online',
      version: 1
    })
  })
})

export default router