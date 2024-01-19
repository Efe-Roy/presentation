import express from 'express';
import { InstrumentWeight } from '../models/weightModel.js';

const router = express.Router();

// Route for Save a new Book
router.post('/', async (request, response) => {
  try {
    // if (
    //   !request.body.riskScore ||
    //   !request.body.nigerianStocks ||
    //   !request.body.foriegnStocks ||
    //   !request.body.techStocks ||
    //   !request.body.emergingStocks ||
    //   !request.body.nigerianBonds ||
    //   !request.body.foriegnBonds ||
    //   !request.body.commodities ||
    //   !request.body.realEstate ||
    //   !request.body.tBills ||
    //   !request.body.alternative 
    // ) {
    //   return response.status(400).send({
    //     message: 'Send all required fields: riskScore, nigerianStocks, foriegnStocks, techStocks, emergingStocks, nigerianBonds, foriegnBonds, commodities, realEstate, tBills, alternative',
    //   });
    // }
    const newData = {
      riskScore: request.body.riskScore,
      nigerianStocks: request.body.nigerianStocks,
      foriegnStocks: request.body.foriegnStocks,
      techStocks: request.body.techStocks,
      emergingStocks: request.body.emergingStocks,
      nigerianBonds: request.body.nigerianBonds,
      foriegnBonds: request.body.foriegnBonds,
      commodities: request.body.commodities,
      realEstate: request.body.realEstate,
      tBills: request.body.tBills,
      alternative: request.body.alternative
    };

    const resData = await InstrumentWeight.create(newData);

    return response.status(201).send(resData);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
  try {
    const queryset = await InstrumentWeight.find({});

    return response.status(200).json({
      count: queryset.length,
      data: queryset,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


export default router;
