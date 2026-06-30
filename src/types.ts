/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Landscape';
  location: string;
  area: string;
  year: string;
  client: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

export interface ApproachItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'responded';
  aiReply?: string;
}
