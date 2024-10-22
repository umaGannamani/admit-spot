import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { first_name, last_name, email_id, phone_number, message, country_of_residence, office_location } = req.body;
        try {
            const newCallback = await prisma.callbackRequest.create({
                data: {
                    first_name,
                    last_name,
                    email_id,
                    phone_number,
                    message,
                    country_of_residence,
                    office_location,
                },
            });
            res.status(200).json(newCallback);
        } catch (error) {
            res.status(500).json({ error: 'Database error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
