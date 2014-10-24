(function() {
  var Units, key, obj, root,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Units = Units || {};

  Units.Translations = {
    "bytes": {
      "ONE": {
        "long": {
          "one": "{value} byte",
          "other": "{value} bytes"
        },
        "long_name": "Bytes",
        "short": "{value}B",
        "short_name": "B"
      },
      "KILO": {
        "long": {
          "one": "{value} Kilobyte",
          "other": "{value} Kilobytes"
        },
        "long_name": "Kilobytes",
        "short": "{value}KB",
        "short_name": "KB"
      },
      "MEGA": {
        "long": {
          "one": "{value} Megabyte",
          "other": "{value} Megabytes"
        },
        "long_name": "Megabytes",
        "short": "{value}MB",
        "short_name": "MB"
      },
      "GIGA": {
        "long": {
          "one": "{value} Gigabyte",
          "other": "{value} Gigabytes"
        },
        "long_name": "Gigabytes",
        "short": "{value}GB",
        "short_name": "GB"
      },
      "TERA": {
        "long": {
          "one": "{value} Terabyte",
          "other": "{value} Terabytes"
        },
        "long_name": "Terabytes",
        "short": "{value}TB",
        "short_name": "TB"
      },
      "PETA": {
        "long": {
          "one": "{value} Petabyte",
          "other": "{value} Petabytes"
        },
        "long_name": "Petabytes",
        "short": "{value}PB",
        "short_name": "PB"
      },
      "EXA": {
        "long": {
          "one": "{value} Exabyte",
          "other": "{value} Exabytes"
        },
        "long_name": "Exabytes",
        "short": "{value}EB",
        "short_name": "EB"
      }
    },
    "celsius": {
      "ONE": {
        "long": {
          "one": "{value} Celsius degree",
          "other": "{value} Celsius degrees"
        },
        "long_name": "Celsius degrees",
        "short": "{value}℃",
        "short_name": "℃"
      }
    },
    "fahrenheit": {
      "ONE": {
        "long": {
          "one": "{value} Fahrenheit degree",
          "other": "{value} Fahrenheit degrees"
        },
        "long_name": "Fahrenheit degrees",
        "short": "{value}℉",
        "short_name": "℉"
      }
    },
    "feet": {
      "ONE": {
        "long": {
          "one": "{value} foot",
          "other": "{value} feet"
        },
        "long_name": "Feet",
        "short": "{value}ft",
        "short_name": "ft"
      }
    },
    "kelvins": {
      "ONE": {
        "long": {
          "one": "{value} Kelvin degree",
          "other": "{value} Kelvin degrees"
        },
        "long_name": "Kelvin degrees",
        "short": "{value}K",
        "short_name": "K"
      }
    },
    "kilograms": {
      "FEMTO": {
        "long": {
          "one": "{value} picogram",
          "other": "{value} picograms"
        },
        "long_name": "Picograms",
        "short": "{value}pg",
        "short_name": "pg"
      },
      "PICO": {
        "long": {
          "one": "{value} nanogram",
          "other": "{value} nanograms"
        },
        "long_name": "Nanograms",
        "short": "{value}ng",
        "short_name": "ng"
      },
      "NANO": {
        "long": {
          "one": "{value} microgram",
          "other": "{value} micrograms"
        },
        "long_name": "Micrograms",
        "short": "{value}µg",
        "short_name": "µg"
      },
      "MICRO": {
        "long": {
          "one": "{value} milligram",
          "other": "{value} milligrams"
        },
        "long_name": "Milligrams",
        "short": "{value}mg",
        "short_name": "mg"
      },
      "MILLI": {
        "long": {
          "one": "{value} gram",
          "other": "{value} grams"
        },
        "long_name": "Grams",
        "short": "{value}g",
        "short_name": "g"
      },
      "ONE": {
        "long": {
          "one": "{value} kilogram",
          "other": "{value} kilograms"
        },
        "long_name": "Kilograms",
        "short": "{value}kg",
        "short_name": "kg"
      },
      "KILO": {
        "long": {
          "one": "{value} ton",
          "other": "{value} tons"
        },
        "long_name": "Tons",
        "short": "{value}t",
        "short_name": "t"
      },
      "MEGA": {
        "long": {
          "one": "{value} Kiloton",
          "other": "{value} Kilotons"
        },
        "long_name": "Kilotons",
        "short": "{value}kt",
        "short_name": "kt"
      },
      "GIGA": {
        "long": {
          "one": "{value} Megaton",
          "other": "{value} Megatons"
        },
        "long_name": "Megatons",
        "short": "{value}mt",
        "short_name": "mt"
      }
    },
    "inches": {
      "ONE": {
        "long": {
          "one": "{value} inch",
          "other": "{value} inches"
        },
        "long_name": "Inches",
        "short": "{value}\"",
        "short_name": "\\\""
      }
    },
    "miles": {
      "ONE": {
        "long": {
          "one": "{value} mile",
          "other": "{value} miles"
        },
        "long_name": "Miles",
        "short": "{value}mi",
        "short_name": "mi"
      }
    },
    "meters": {
      "ONE": {
        "long": {
          "one": "{value} meter",
          "other": "{value} meters"
        },
        "long_name": "Meters",
        "short": "{value}m",
        "short_name": "m"
      },
      "KILO": {
        "long": {
          "one": "{value} kilometer",
          "other": "{value} kilometers"
        },
        "long_name": "Kilometers",
        "short": "{value}km",
        "short_name": "km"
      },
      "PICO": {
        "long": {
          "one": "{value} picometer",
          "other": "{value} picometers"
        },
        "long_name": "Picometers",
        "short": "{value}pm",
        "short_name": "pm"
      },
      "NANO": {
        "long": {
          "one": "{value} nanometer",
          "other": "{value} nanometers"
        },
        "long_name": "Nanometers",
        "short": "{value}nm",
        "short_name": "nm"
      },
      "MICRO": {
        "long": {
          "one": "{value} micrometer",
          "other": "{value} micrometers"
        },
        "long_name": "Micrometers",
        "short": "{value}µm",
        "short_name": "µm"
      },
      "MILLI": {
        "long": {
          "one": "{value} millimeter",
          "other": "{value} millimeters"
        },
        "long_name": "Millimeters",
        "short": "{value}mm",
        "short_name": "mm"
      }
    },
    "ounces": {
      "ONE": {
        "long": {
          "one": "{value} ounce",
          "other": "{value} ounces"
        },
        "long_name": "Ounces",
        "short": "{value}oz",
        "short_name": "oz"
      }
    },
    "pounds": {
      "ONE": {
        "long": {
          "one": "{value} pound",
          "other": "{value} pounds"
        },
        "long_name": "Pounds",
        "short": "{value}lbs",
        "short_name": "lbs"
      }
    },
    "power": {
      "ONE": {
        "long": {
          "one": "{value} Watt",
          "other": "{value} Watts"
        },
        "long_name": "Watts",
        "short": "{value}W",
        "short_name": "W"
      },
      "KILO": {
        "long": {
          "one": "{value} KiloWatt",
          "other": "{value} KiloWatts"
        },
        "long_name": "KiloWatts",
        "short": "{value}kW",
        "short_name": "kW"
      },
      "MEGA": {
        "long": {
          "one": "{value} MegaWatt",
          "other": "{value} MegaWatts"
        },
        "long_name": "MegaWatts",
        "short": "{value}MW",
        "short_name": "MW"
      },
      "GIGA": {
        "long": {
          "one": "{value} GigaWatt",
          "other": "{value} GigaWatts"
        },
        "long_name": "GigaWatts",
        "short": "{value}GW",
        "short_name": "GW"
      },
      "TERA": {
        "long": {
          "one": "{value} TeraWatt",
          "other": "{value} TeraWatts"
        },
        "long_name": "TeraWatts",
        "short": "{value}TW",
        "short_name": "TW"
      },
      "PICO": {
        "long": {
          "one": "{value} PicoWatt",
          "other": "{value} PicoWatts"
        },
        "long_name": "PicoWatts",
        "short": "{value}pW",
        "short_name": "pW"
      },
      "NANO": {
        "long": {
          "one": "{value} NanoWatt",
          "other": "{value} NanoWatts"
        },
        "long_name": "NanoWatts",
        "short": "{value}nW",
        "short_name": "nW"
      },
      "MICRO": {
        "long": {
          "one": "{value} MicroWatt",
          "other": "{value} MicroWatts"
        },
        "long_name": "MicroWatts",
        "short": "{value}µW",
        "short_name": "µW"
      },
      "MILLI": {
        "long": {
          "one": "{value} MilliWatt",
          "other": "{value} MilliWatts"
        },
        "long_name": "MilliWatts",
        "short": "{value}mW",
        "short_name": "mW"
      }
    },
    "yards": {
      "ONE": {
        "long": {
          "one": "{value} yard",
          "other": "{value} yards"
        },
        "long_name": "Yards",
        "short": "{value}yds",
        "short_name": "yds"
      }
    }
  };

  Units.MessageFormatter = (function() {
    function MessageFormatter() {}

    MessageFormatter.format = function(message, values, cldr) {
      var count, pluralKey;
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      if (message.constructor === String) {
        return Units.MessageFormatter.substitute(message, values);
      } else {
        count = values['count'];
        pluralKey = cldr.PluralRules.rule_for(count);
        return Units.MessageFormatter.substitute(message[pluralKey], values);
      }
    };

    MessageFormatter.substitute = function(message, values) {
      return message.replace(/\{(\w+)\}/g, function(name) {
        return values[name.slice(1, -1)];
      });
    };

    return MessageFormatter;

  })();

  Units.ScalingFormatter = (function() {
    ScalingFormatter.FEMTO = -5;

    ScalingFormatter.PICO = -4;

    ScalingFormatter.NANO = -3;

    ScalingFormatter.MICRO = -2;

    ScalingFormatter.MILLI = -1;

    ScalingFormatter.ONE = 0;

    ScalingFormatter.KILO = 1;

    ScalingFormatter.MEGA = 2;

    ScalingFormatter.GIGA = 3;

    ScalingFormatter.TERA = 4;

    ScalingFormatter.PETA = 5;

    ScalingFormatter.EXA = 6;

    ScalingFormatter.ZETTA = 7;

    ScalingFormatter.prototype.PREFIXES = {
      '-5': 'FEMTO',
      '-4': 'PICO',
      '-3': 'NANO',
      '-2': 'MICRO',
      '-1': 'MILLI',
      '0': 'ONE',
      '1': 'KILO',
      '2': 'MEGA',
      '3': 'GIGA',
      '4': 'TERA',
      '5': 'PETA',
      '6': 'EXA',
      '7': 'ZETTA'
    };

    function ScalingFormatter(key, precision, cldr, multiplier, minIndex, maxIndex) {
      this.key = key;
      this.precision = precision;
      this.cldr = cldr;
      this.multiplier = multiplier;
      this.minIndex = minIndex;
      this.maxIndex = maxIndex;
    }

    ScalingFormatter.prototype.convert = function(value) {
      var index;
      index = 0;
      if (value < 1) {
        while (value < 1 && index > this.minIndex) {
          value = value * this.multiplier;
          index--;
        }
      } else if (value >= this.multiplier) {
        while (value >= this.multiplier && index < this.maxIndex) {
          value = value / this.multiplier;
          index++;
        }
      }
      return value;
    };

    ScalingFormatter.prototype.format = function(value, precision) {
      if (precision == null) {
        precision = this.precision;
      }
      precision = this.computePrecision(value, precision);
      return new this.cldr.DecimalFormatter().format(value, {
        precision: precision
      });
    };

    ScalingFormatter.prototype.computePrecision = function(value, precision) {
      var decimalPart, firstSignificantIndex, log;
      if (precision === 0) {
        precision;
      }
      decimalPart = Math.abs(value - Math.round(value));
      if (decimalPart === 0) {
        return 0;
      } else {
        log = Math.log(decimalPart) / Math.LN10;
        firstSignificantIndex = Math.round(Math.abs(log));
        if (firstSignificantIndex > precision) {
          return 0;
        } else {
          return precision;
        }
      }
    };

    ScalingFormatter.prototype.translationKey = function(value, name) {
      var index, prefix, unitTranslations;
      unitTranslations = Units.Translations[this.key];
      index = this.computeIndex(value);
      prefix = this.PREFIXES[index];
      return unitTranslations[prefix][name];
    };

    ScalingFormatter.prototype.longKey = function(value) {
      return this.translationKey(value, 'long');
    };

    ScalingFormatter.prototype.formatLong = function(value, precision) {
      var convertedValue, count;
      if (precision == null) {
        precision = this.precision;
      }
      convertedValue = this.convert(value);
      count = parseFloat(convertedValue.toFixed(precision));
      return Units.MessageFormatter.format(this.longKey(value), {
        value: this.format(convertedValue, precision),
        count: count
      }, this.cldr);
    };

    ScalingFormatter.prototype.shortKey = function(value) {
      return this.translationKey(value, 'short');
    };

    ScalingFormatter.prototype.formatShort = function(value, precision) {
      var convertedValue;
      if (precision == null) {
        precision = this.precision;
      }
      convertedValue = this.convert(value);
      return Units.MessageFormatter.format(this.shortKey(value), {
        value: this.format(convertedValue, precision)
      }, this.cldr);
    };

    ScalingFormatter.prototype.longUnitKey = function(value) {
      return this.translationKey(value, 'long_name');
    };

    ScalingFormatter.prototype.unitLong = function(value) {
      return Units.MessageFormatter.format(this.longUnitKey(value));
    };

    ScalingFormatter.prototype.shortUnitKey = function(value) {
      return this.translationKey(value, 'short_name');
    };

    ScalingFormatter.prototype.unitShort = function(value) {
      return Units.MessageFormatter.format(this.shortUnitKey(value));
    };

    ScalingFormatter.prototype.computeIndex = function(value) {
      var index;
      if (value === 0) {
        return 0;
      }
      index = 0;
      if (value < 1) {
        while (value < 1 && index > this.minIndex) {
          value = value * this.multiplier;
          index--;
        }
      } else if (value >= this.multiplier) {
        while (value >= this.multiplier && index < this.maxIndex) {
          value = value / this.multiplier;
          index++;
        }
      }
      return index;
    };

    return ScalingFormatter;

  })();

  Units.PowerFormatter = (function(_super) {
    __extends(PowerFormatter, _super);

    function PowerFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      PowerFormatter.__super__.constructor.call(this, 'power', 1, cldr, 1000, Units.ScalingFormatter.PICO, Units.ScalingFormatter.TERA);
    }

    return PowerFormatter;

  })(Units.ScalingFormatter);

  Units.BytesFormatter = (function(_super) {
    __extends(BytesFormatter, _super);

    function BytesFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      BytesFormatter.__super__.constructor.call(this, 'bytes', 1, cldr, 1024, Units.ScalingFormatter.ONE, Units.ScalingFormatter.EXA);
    }

    return BytesFormatter;

  })(Units.ScalingFormatter);

  Units.FeetFormatter = (function(_super) {
    __extends(FeetFormatter, _super);

    function FeetFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      FeetFormatter.__super__.constructor.call(this, 'feet', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return FeetFormatter;

  })(Units.ScalingFormatter);

  Units.InchesFormatter = (function(_super) {
    __extends(InchesFormatter, _super);

    function InchesFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      InchesFormatter.__super__.constructor.call(this, 'inches', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return InchesFormatter;

  })(Units.ScalingFormatter);

  Units.MetersFormatter = (function(_super) {
    __extends(MetersFormatter, _super);

    function MetersFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      MetersFormatter.__super__.constructor.call(this, 'meters', 1, cldr, 1000, Units.ScalingFormatter.PICO, Units.ScalingFormatter.KILO);
    }

    return MetersFormatter;

  })(Units.ScalingFormatter);

  Units.MilesFormatter = (function(_super) {
    __extends(MilesFormatter, _super);

    function MilesFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      MilesFormatter.__super__.constructor.call(this, 'miles', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return MilesFormatter;

  })(Units.ScalingFormatter);

  Units.YardsFormatter = (function(_super) {
    __extends(YardsFormatter, _super);

    function YardsFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      YardsFormatter.__super__.constructor.call(this, 'yards', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return YardsFormatter;

  })(Units.ScalingFormatter);

  Units.KilogramsFormatter = (function(_super) {
    __extends(KilogramsFormatter, _super);

    function KilogramsFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      KilogramsFormatter.__super__.constructor.call(this, 'kilograms', 1, cldr, 1000, Units.ScalingFormatter.FEMTO, Units.ScalingFormatter.GIGA);
    }

    return KilogramsFormatter;

  })(Units.ScalingFormatter);

  Units.OuncesFormatter = (function(_super) {
    __extends(OuncesFormatter, _super);

    function OuncesFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      OuncesFormatter.__super__.constructor.call(this, 'ounces', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return OuncesFormatter;

  })(Units.ScalingFormatter);

  Units.PoundsFormatter = (function(_super) {
    __extends(PoundsFormatter, _super);

    function PoundsFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      PoundsFormatter.__super__.constructor.call(this, 'pounds', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return PoundsFormatter;

  })(Units.ScalingFormatter);

  Units.CelsiusFormatter = (function(_super) {
    __extends(CelsiusFormatter, _super);

    function CelsiusFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      CelsiusFormatter.__super__.constructor.call(this, 'celsius', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return CelsiusFormatter;

  })(Units.ScalingFormatter);

  Units.FahrenheitFormatter = (function(_super) {
    __extends(FahrenheitFormatter, _super);

    function FahrenheitFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      FahrenheitFormatter.__super__.constructor.call(this, 'fahrenheit', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return FahrenheitFormatter;

  })(Units.ScalingFormatter);

  Units.KelvinsFormatter = (function(_super) {
    __extends(KelvinsFormatter, _super);

    function KelvinsFormatter(cldr) {
      if (cldr == null) {
        cldr = TwitterCldr;
      }
      KelvinsFormatter.__super__.constructor.call(this, 'kelvins', 1, cldr, 1000, Units.ScalingFormatter.ONE, Units.ScalingFormatter.ONE);
    }

    return KelvinsFormatter;

  })(Units.ScalingFormatter);

  Units.FormattableQuantity = (function() {
    function FormattableQuantity(value, cldr) {
      this.value = value;
      this.cldr = cldr != null ? cldr : TwitterCldr;
    }

    FormattableQuantity.prototype.format = function(precision) {
      var formatter;
      formatter = this.formatter();
      precision = precision != null ? precision : formatter.precision;
      return formatter.format(this.value, precision);
    };

    FormattableQuantity.prototype.formatLong = function(precision) {
      var formatter;
      formatter = this.formatter();
      precision = precision != null ? precision : formatter.precision;
      return formatter.formatLong(this.value, precision);
    };

    FormattableQuantity.prototype.formatShort = function(precision) {
      var formatter;
      formatter = this.formatter();
      precision = precision != null ? precision : formatter.precision;
      return formatter.formatShort(this.value, precision);
    };

    FormattableQuantity.prototype.unitLong = function() {
      return this.formatter().unitLong(this.value);
    };

    FormattableQuantity.prototype.unitShort = function() {
      return this.formatter().unitLong(this.value);
    };

    return FormattableQuantity;

  })();

  Units.DistanceUnit = (function(_super) {
    __extends(DistanceUnit, _super);

    function DistanceUnit() {
      return DistanceUnit.__super__.constructor.apply(this, arguments);
    }

    DistanceUnit.prototype["in"] = function(distanceClass) {
      var convertedDistance;
      convertedDistance = new distanceClass(0, this.cldr);
      convertedDistance.value = (this.value / this.distanceMultiplier()) * convertedDistance.distanceMultiplier();
      return convertedDistance;
    };

    DistanceUnit.prototype.distanceMultiplier = function() {
      return 0;
    };

    return DistanceUnit;

  })(Units.FormattableQuantity);

  Units.Feet = (function(_super) {
    __extends(Feet, _super);

    function Feet() {
      return Feet.__super__.constructor.apply(this, arguments);
    }

    Feet.prototype.FORMATTER = void 0;

    Feet.prototype.distanceMultiplier = function() {
      return 3.28084;
    };

    Feet.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.FeetFormatter(this.cldr);
    };

    return Feet;

  })(Units.DistanceUnit);

  Units.Inches = (function(_super) {
    __extends(Inches, _super);

    function Inches() {
      return Inches.__super__.constructor.apply(this, arguments);
    }

    Inches.prototype.FORMATTER = void 0;

    Inches.prototype.distanceMultiplier = function() {
      return 39.3701;
    };

    Inches.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.InchesFormatter(this.cldr);
    };

    return Inches;

  })(Units.DistanceUnit);

  Units.Meters = (function(_super) {
    __extends(Meters, _super);

    function Meters() {
      return Meters.__super__.constructor.apply(this, arguments);
    }

    Meters.prototype.FORMATTER = void 0;

    Meters.prototype.distanceMultiplier = function() {
      return 1;
    };

    Meters.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.MetersFormatter(this.cldr);
    };

    return Meters;

  })(Units.DistanceUnit);

  Units.Miles = (function(_super) {
    __extends(Miles, _super);

    function Miles() {
      return Miles.__super__.constructor.apply(this, arguments);
    }

    Miles.prototype.FORMATTER = void 0;

    Miles.prototype.distanceMultiplier = function() {
      return 0.000621371;
    };

    Miles.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.MilesFormatter(this.cldr);
    };

    return Miles;

  })(Units.DistanceUnit);

  Units.Yards = (function(_super) {
    __extends(Yards, _super);

    function Yards() {
      return Yards.__super__.constructor.apply(this, arguments);
    }

    Yards.prototype.FORMATTER = void 0;

    Yards.prototype.distanceMultiplier = function() {
      return 1.09361;
    };

    Yards.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.YardsFormatter(this.cldr);
    };

    return Yards;

  })(Units.DistanceUnit);

  Units.MassUnit = (function(_super) {
    __extends(MassUnit, _super);

    function MassUnit() {
      return MassUnit.__super__.constructor.apply(this, arguments);
    }

    MassUnit.prototype["in"] = function(massClass) {
      var convertedMass;
      convertedMass = new massClass(0, this.cldr);
      convertedMass.value = (this.value / this.massMultiplier()) * convertedMass.massMultiplier();
      return convertedMass;
    };

    MassUnit.prototype.massMultiplier = function() {
      return 0;
    };

    return MassUnit;

  })(Units.FormattableQuantity);

  Units.Kilograms = (function(_super) {
    __extends(Kilograms, _super);

    function Kilograms() {
      return Kilograms.__super__.constructor.apply(this, arguments);
    }

    Kilograms.prototype.FORMATTER = void 0;

    Kilograms.prototype.massMultiplier = function() {
      return 1;
    };

    Kilograms.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.KilogramsFormatter(this.cldr);
    };

    return Kilograms;

  })(Units.MassUnit);

  Units.Ounces = (function(_super) {
    __extends(Ounces, _super);

    function Ounces() {
      return Ounces.__super__.constructor.apply(this, arguments);
    }

    Ounces.prototype.FORMATTER = void 0;

    Ounces.prototype.massMultiplier = function() {
      return 35.274;
    };

    Ounces.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.OuncesFormatter(this.cldr);
    };

    return Ounces;

  })(Units.MassUnit);

  Units.Pounds = (function(_super) {
    __extends(Pounds, _super);

    function Pounds() {
      return Pounds.__super__.constructor.apply(this, arguments);
    }

    Pounds.prototype.FORMATTER = void 0;

    Pounds.prototype.massMultiplier = function() {
      return 2.20462;
    };

    Pounds.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.PoundsFormatter(this.cldr);
    };

    return Pounds;

  })(Units.MassUnit);

  Units.TemperatureUnit = (function(_super) {
    __extends(TemperatureUnit, _super);

    function TemperatureUnit() {
      return TemperatureUnit.__super__.constructor.apply(this, arguments);
    }

    TemperatureUnit.prototype["in"] = function(temperatureClass) {
      var convertedTemperature;
      convertedTemperature = new temperatureClass(0, this.cldr);
      convertedTemperature.value = convertedTemperature.fromKelvins(this.toKelvins());
      return convertedTemperature;
    };

    TemperatureUnit.prototype.toKelvins = function() {
      return 0;
    };

    TemperatureUnit.prototype.fromKelvins = function(kelvins) {
      return 0;
    };

    return TemperatureUnit;

  })(Units.FormattableQuantity);

  Units.Celsius = (function(_super) {
    __extends(Celsius, _super);

    function Celsius() {
      return Celsius.__super__.constructor.apply(this, arguments);
    }

    Celsius.prototype.FORMATTER = void 0;

    Celsius.prototype.toKelvins = function() {
      return this.value + 273.15;
    };

    Celsius.prototype.fromKelvins = function(kelvins) {
      return kelvins - 273.15;
    };

    Celsius.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.CelsiusFormatter(this.cldr);
    };

    return Celsius;

  })(Units.TemperatureUnit);

  Units.Fahrenheit = (function(_super) {
    __extends(Fahrenheit, _super);

    function Fahrenheit() {
      return Fahrenheit.__super__.constructor.apply(this, arguments);
    }

    Fahrenheit.prototype.FORMATTER = void 0;

    Fahrenheit.prototype.toKelvins = function() {
      return (this.value + 459.67) * 5 / 9;
    };

    Fahrenheit.prototype.fromKelvins = function(kelvins) {
      return (kelvins * 9 / 5) - 459.67;
    };

    Fahrenheit.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.FahrenheitFormatter(this.cldr);
    };

    return Fahrenheit;

  })(Units.TemperatureUnit);

  Units.Kelvins = (function(_super) {
    __extends(Kelvins, _super);

    function Kelvins() {
      return Kelvins.__super__.constructor.apply(this, arguments);
    }

    Kelvins.prototype.FORMATTER = void 0;

    Kelvins.prototype.toKelvins = function() {
      return this.value;
    };

    Kelvins.prototype.fromKelvins = function(kelvins) {
      return kelvins;
    };

    Kelvins.prototype.formatter = function() {
      return this.FORMATTER = this.FORMATTER != null ? this.FORMATTER : new Units.KelvinsFormatter(this.cldr);
    };

    return Kelvins;

  })(Units.TemperatureUnit);

  root = typeof exports !== "undefined" && exports !== null ? exports : (this.Units = {}, this.Units);

  for (key in Units) {
    obj = Units[key];
    root[key] = obj;
  }

}).call(this);
