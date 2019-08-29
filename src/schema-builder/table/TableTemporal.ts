import {TableTemporalOptions} from "../options/TableTemporalOptions";
import {TemporalMetadata} from "../../metadata/TemporalMetadata";

/**
 * Database's system versioned table constructor stored in this class.
 */
export class TableTemporal {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------
    /**
     * Historical table name.
     */
    historicalTableName?: string;

    /**
     * name of the columns for system start time
     */
    sysStartTimeColumnName: string = "ValidFrom";
    /**
     * name of the columns for system end time
     */
    sysEndTimeColumnName: string = "ValidTo";

    /**
     * name of the function to use as a timestamps for sysStartTimeColumnName, default is GETUTCDATE()
     */
    getDateFunction?: string;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

  constructor(options: TableTemporalOptions) {
      this.historicalTableName = options.historicalTableName;
      this.sysStartTimeColumnName = options.sysStartTimeColumnName;
      this.sysEndTimeColumnName = options.sysEndTimeColumnName;
      this.getDateFunction = options.getDateFunction;
  }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    // /**
    //  * Creates a new copy of this constraint with exactly same properties.
    //  */
    clone(): TableTemporal {
      return new TableTemporal(<TableTemporalOptions>{
        historicalTableName: this.historicalTableName,
        sysStartTimeColumnName: this.sysStartTimeColumnName,
        sysEndTimeColumnName: this.sysEndTimeColumnName,
        getDateFunction: this.getDateFunction
      });
    }

    // -------------------------------------------------------------------------
    // Static Methods
    // -------------------------------------------------------------------------

    // /**
    //  * Creates temporal table from  metadata object.
    //  */
  static create(temporalMetadata: TemporalMetadata): TableTemporal {
    return new TableTemporal(<TableTemporalOptions>{
      historicalTableName: temporalMetadata.historicalTableName,
      sysStartTimeColumnName: temporalMetadata.sysStartTimeColumnName,
      sysEndTimeColumnName: temporalMetadata.sysEndTimeColumnName,
      getDateFunction: temporalMetadata.getDateFunction
  });
  }
}