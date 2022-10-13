import { FC } from 'react';

interface IComponentProps {
  color?: string;
}

export const Mail: FC<IComponentProps> = ({ color }) => (
  <svg
    width="23"
    height="17"
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9325 1.98267L15.2217 8.54765L21.9325 15.1126C22.0539 14.8629 22.1274 14.5871 22.1274 14.2922V2.80308C22.1274 2.50819 22.0539 2.23245 21.9325 1.98267Z"
      fill="#9CC634"
    />
    <path
      d="M12.4388 9.48249L21.0157 1.08009C20.762 0.960523 20.482 0.888184 20.1825 0.888184H1.9448C1.64531 0.888184 1.36526 0.960523 1.11157 1.08009L9.68847 9.48249C10.4469 10.2293 11.6804 10.2293 12.4388 9.48249Z"
      fill="#9CC634"
    />
    <path
      d="M0.19491 1.98267C0.0734694 2.23245 0 2.50819 0 2.80308V14.2922C0 14.5871 0.0734694 14.8629 0.19491 15.1126L6.90569 8.54765L0.19491 1.98267Z"
      fill="#9CC634"
    />
    <path
      d="M13.3555 10.3851C12.0918 11.6293 10.0355 11.6293 8.77227 10.3851L7.82235 9.4502L1.11157 16.0152C1.36526 16.1348 1.64531 16.2071 1.9448 16.2071H20.1825C20.482 16.2071 20.762 16.1348 21.0157 16.0152L14.3049 9.4502L13.3555 10.3851Z"
      fill="#9CC634"
    />
  </svg>
);
