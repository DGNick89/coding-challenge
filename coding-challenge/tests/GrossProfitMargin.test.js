import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GrossProfitMargin from '../src/components/GrossProfitMargin';

describe('GrossProfitMargin Component', () => {
    test('renders Gross Profit Margin title', () => {
        render(<GrossProfitMargin category={[]} />);
        const titleElement = screen.getByText(/Gross Profit Margin/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('calculates gross profit margin correctly with valid data', () => {
        const mockCategory = [
            {
                account_type: 'sales',
                value_type: 'debit',
                total_value: 10000,
                account_category: 'revenue',
            },
            {
                account_type: 'sales',
                value_type: 'debit',
                total_value: 5000,
                account_category: 'revenue',
            },
            {
                account_type: 'sales',
                value_type: 'credit',
                total_value: 2000,
                account_category: 'revenue',
            },
            {
                account_type: 'sales',
                value_type: 'debit',
                total_value: 8000,
                account_category: 'expense',
            },
        ];

        render(<GrossProfitMargin category={mockCategory} />);

        const percentageElement = screen.getByText(/150%/i); // Example: Modify as per expected output
        expect(percentageElement).toBeInTheDocument();
    });

    test('handles empty category gracefully', () => {
        render(<GrossProfitMargin category={[]} />);
        const percentageElement = screen.getByText(/NaN%|0%/i);
        expect(percentageElement).toBeInTheDocument();
    });
});
