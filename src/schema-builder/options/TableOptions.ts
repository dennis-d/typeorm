import {TableColumnOptions} from "./TableColumnOptions";
import {TableIndexOptions} from "./TableIndexOptions";
import {TableForeignKeyOptions} from "./TableForeignKeyOptions";
import {TableUniqueOptions} from "./TableUniqueOptions";
import {TableCheckOptions} from "./TableCheckOptions";
import {TableExclusionOptions} from "./TableExclusionOptions";
import {TableTemporalOptions} from "./TableTemporalOptions";

/**
 * Table options.
 */
export interface TableOptions {

    // -------------------------------------------------------------------------
    // Public Properties
    // -------------------------------------------------------------------------

    /**
     * Table name.
     */
    name: string;

    /**
     * Table columns.
     */
    columns?: TableColumnOptions[];

    /**
     * Table indices.
     */
    indices?: TableIndexOptions[];

    /**
     * Table foreign keys.
     */
    foreignKeys?: TableForeignKeyOptions[];

    /**
     * Table unique constraints.
     */
    uniques?: TableUniqueOptions[];

    /**
     * Table check constraints.
     */
    checks?: TableCheckOptions[];

    /**
     * Table check constraints.
     */
    exclusions?: TableExclusionOptions[];

    /**
     * Indicates if table was just created.
     * This is needed, for example to check if we need to skip primary keys creation
     * for new tables.
     */
    justCreated?: boolean;

    /**
     * Table engine.
     */
    engine?: string;

    /**
     * System Versioned table
     * Pass system versioned parameters
     */
    temporal?: TableTemporalOptions;

}
