import { format, isToday, isSameDay, parseISO } from 'date-fns';

/**
 * Format a date to a readable string
 * @param {Date|string} date - The date to format
 * @param {string} formatStr - The format string
 * @returns {string} The formatted date string
 */
export const formatDate = (date, formatStr = 'MMMM dd, yyyy') => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatStr);
};

/**
 * Format a time to a readable string
 * @param {Date|string} date - The date to format
 * @returns {string} The formatted time string
 */
export const formatTime = (date) => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'h:mm a');
};

/**
 * Format a date and time to a readable string
 * @param {Date|string} date - The date to format
 * @returns {string} The formatted date and time string
 */
export const formatDateTime = (date) => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMMM dd, yyyy h:mm a');
};

/**
 * Check if a date is today
 * @param {Date|string} date - The date to check
 * @returns {boolean} True if the date is today
 */
export const checkIsToday = (date) => {
  if (!date) return false;
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return isToday(dateObj);
};

/**
 * Check if two dates are the same day
 * @param {Date|string} dateA - The first date
 * @param {Date|string} dateB - The second date
 * @returns {boolean} True if the dates are the same day
 */
export const checkIsSameDay = (dateA, dateB) => {
  if (!dateA || !dateB) return false;
  const dateObjA = typeof dateA === 'string' ? parseISO(dateA) : dateA;
  const dateObjB = typeof dateB === 'string' ? parseISO(dateB) : dateB;
  return isSameDay(dateObjA, dateObjB);
};