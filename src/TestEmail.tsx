import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Hr } from "@react-email/hr";

interface TestEmailProps {
    userId: string;
    username: string;
    ipAddress: string;
}

export default function TestEmail({ userId, username, ipAddress }: TestEmailProps) {
    return (
        <Html>
            <Container style={{ padding: "30px", fontFamily: "Nunito, sans-serif" }}>
                <Heading as="h2">📬 Test Email</Heading>
                <Text>Hello, {username}!</Text>
                <Text>Here is your test data:</Text>

                <Hr />

                <Text><strong>User ID:</strong> {userId}</Text>
                <Text><strong>IP Address:</strong> {ipAddress}</Text>

                <Hr />

                <Text>Everything looks good. This is a test message from Blacket"s mail system.</Text>
            </Container>
        </Html>
    );
}
