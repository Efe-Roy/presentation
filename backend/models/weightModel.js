import mongoose from 'mongoose';

const instrumentWeightSchema = mongoose.Schema(
  {
    riskScore: {
      type: Number,
      required: true,
    },
    nigerianStocks: {
      type: Number,
      required: true,
    },
    foriegnStocks: {
      type: Number,
      required: true,
    },
    techStocks: {
      type: Number,
      required: true,
    },
    emergingStocks: {
      type: Number,
      required: true,
    },
    nigerianBonds: {
      type: Number,
      required: true,
    },
    foriegnBonds: {
      type: Number,
      required: true,
    },
    commodities: {
      type: Number,
      required: true,
    },
    realEstate: {
      type: Number,
      required: true,
    },
    tBills: {
      type: Number,
      required: true,
    },
    alternative: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const InstrumentWeight = mongoose.model('InstrumentWeight', instrumentWeightSchema);
