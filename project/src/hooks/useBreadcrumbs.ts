import { useLocation } from 'react-router-dom';
import { BreadcrumbItem } from '../types/navigation';

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 'home', label: 'Home', path: '/' }
  ];

  let currentPath = '';

  // Helper function to check if a breadcrumb already exists
  const hasBreadcrumb = (id: string) => breadcrumbs.some(item => item.id === id);

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    switch (segment) {
      case 'dashboard':
        if (!hasBreadcrumb('dashboard')) {
          breadcrumbs.push({
            id: 'dashboard',
            label: 'Dashboard',
            path: currentPath,
            isActive: isLast
          });
        }
        break;
      case 'learning':
        if (!hasBreadcrumb('dashboard')) {
          breadcrumbs.push({
            id: 'dashboard',
            label: 'Dashboard',
            path: '/dashboard',
            isActive: false
          });
        }
        breadcrumbs.push({
          id: 'learning',
          label: 'Learning Paths',
          path: currentPath,
          isActive: isLast
        });
        break;
      case 'community':
        if (!hasBreadcrumb('dashboard')) {
          breadcrumbs.push({
            id: 'dashboard',
            label: 'Dashboard',
            path: '/dashboard',
            isActive: false
          });
        }
        if (!hasBreadcrumb('community')) {
          breadcrumbs.push({
            id: 'community',
            label: 'Community',
            path: currentPath,
            isActive: isLast
          });
        }
        break;
      case 'debate':
        if (!hasBreadcrumb('dashboard')) {
          breadcrumbs.push({
            id: 'dashboard',
            label: 'Dashboard',
            path: '/dashboard',
            isActive: false
          });
        }
        if (!hasBreadcrumb('community')) {
          breadcrumbs.push({
            id: 'community',
            label: 'Community',
            path: '/community',
            isActive: false
          });
        }
        breadcrumbs.push({
          id: 'debate',
          label: 'Debate Details',
          path: currentPath,
          isActive: isLast
        });
        break;
      case 'pricing':
        breadcrumbs.push({
          id: 'pricing',
          label: 'Pricing',
          path: currentPath,
          isActive: isLast
        });
        break;
    }
  });

  return breadcrumbs;
};