import {
  PluginFunc,
  ConfigType,
  ManipulateType,
  QUnitType,
  OpUnitType
} from 'dayjs'

declare const plugin: PluginFunc
export = plugin

declare module 'dayjs' {
  interface Dayjs {
    quarter(): number

    quarter(quarter: number): Dayjs

    add(value: number, unit: QUnitType | ManipulateType): Dayjs

    subtract(value: number, unit: QUnitType | ManipulateType): Dayjs

    startOf(unit: QUnitType | OpUnitType): Dayjs

    endOf(unit: QUnitType | OpUnitType): Dayjs

    isSame(date?: ConfigType, unit?: QUnitType | OpUnitType): boolean

    isBefore(date?: ConfigType, unit?: QUnitType | OpUnitType): boolean

    isAfter(date?: ConfigType, unit?: QUnitType | OpUnitType): boolean
  }
}
