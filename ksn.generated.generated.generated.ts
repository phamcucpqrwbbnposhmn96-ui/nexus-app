import { describe, it, expect } from "vitest";

// 假设 ksn.tsx 导出了以下函数（实际需根据源代码调整）
import { add, handleNull, compareEmpty } from "./ksn";

describe("ksn.tsx", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(add(1, 2)).toBe(3);
    });

    it("should handle negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });

    it("should handle zero", () => {
      expect(add(0, 5)).toBe(5);
    });

    it("should return NaN for invalid input", () => {
      expect(add("a", 1)).toBeNaN();
    });
  });

  describe("handleNull", () => {
    it("should return null", () => {
      expect(handleNull()).toBeNull();
    });
  });

  describe("compareEmpty", () => {
    it("should consider two empty arrays equal", () => {
      expect(compareEmpty([], [])).toEqual([]);
    });

    it("should handle arrays with different lengths", () => {
      expect(compareEmpty([1], [])).not.toEqual([]);
    });
  });
});