import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Hr } from "@react-email/hr";
import { Button, Img, Link } from "@react-email/components";
import { EMAIL_BACKGROUND_COLOR, EMAIL_BORDER_RADIUS, EMAIL_WIDTH, EMAIL_PADDING, EMAIL_H1_SIZE, EMAIL_TEXT_SIZE, EMAIL_SUBTEXT_SIZE, EMAIL_LINK_COLOR, EMAIL_SUPERTEXT_SIZE, EMAIL_BUTTON_BORDER_RADIUS } from "../../../constants";

import { WelcomeEmailProps } from "./index.d";

export default function WelcomeEmail({ username, }: WelcomeEmailProps) {
    return (
        <Html>
            <Container
                style={{
                    width: EMAIL_WIDTH,
                    maxWidth: "90%",
                    backgroundColor: EMAIL_BACKGROUND_COLOR,
                    borderRadius: EMAIL_BORDER_RADIUS,
                    padding: EMAIL_PADDING,
                    margin: "0 auto",
                    color: "#000",
                    textDecoration: "none",
                    fontFamily: "Helvetica, Verdana, Arial, sans-serif"
                }}
            >
                <Img
                    src="https://blacket.org/content/email-header.png"
                    alt="Blacket Logo"
                />

                <Heading
                    style={{
                        fontSize: EMAIL_H1_SIZE,
                        fontWeight: 700,
                        textAlign: "center",
                        marginTop: EMAIL_TEXT_SIZE,
                        marginBottom: EMAIL_TEXT_SIZE
                    }}
                >
                    Welcome to Blacket!
                </Heading>

                <Text
                    style={{
                        fontSize: EMAIL_TEXT_SIZE,
                        marginBottom: EMAIL_TEXT_SIZE
                    }}
                >
                    Hi {username},
                    <br />
                    <br />
                    We're excited to have you join the Blacket community! Your account has been created and you're now part of an amazing group of players and collectors.
                </Text>

                <Button
                    style={{
                        backgroundColor: "#2f2f2f",
                        borderRadius: EMAIL_BUTTON_BORDER_RADIUS,
                        textDecoration: "none",
                        color: "#fff",
                        fontSize: EMAIL_TEXT_SIZE,
                        padding: `${EMAIL_TEXT_SIZE}px ${EMAIL_TEXT_SIZE * 1.5}px`,
                        margin: `${EMAIL_H1_SIZE}px auto`,
                        textAlign: "center",
                        display: "block",
                        width: "fit-content"
                    }}
                    href="https://blacket.org"
                >
                    Visit Blacket
                </Button>

                <Hr
                    style={{
                        border: "2px solid #000",
                        margin: `${EMAIL_TEXT_SIZE}px 0`,
                        opacity: 0.5
                    }}
                />

                <Text
                    style={{
                        fontSize: EMAIL_SUPERTEXT_SIZE,
                        opacity: 0.5,
                        marginTop: EMAIL_TEXT_SIZE,
                        marginBottom: EMAIL_TEXT_SIZE,
                        lineHeight: 1.5
                    }}
                >
                    We are not affiliated with Blooket in any way.
                    <br />
                    Please do not contact Blooket about any issues you may have with Blacket.
                    <br />
                    Blacket &copy; {new Date().getFullYear()} All rights reserved.
                </Text>

                <Text
                    style={{
                        fontSize: EMAIL_SUPERTEXT_SIZE,
                        marginTop: EMAIL_TEXT_SIZE,
                        marginBottom: EMAIL_TEXT_SIZE,
                        opacity: 0.5,
                        lineHeight: 1.5
                    }}
                >
                    Need help or have questions?
                    <br />
                    Contact us anytime at{" "}
                    <Link href="mailto:contact-us@blacket.org" style={{ color: EMAIL_LINK_COLOR }}>
                        contact-us@blacket.org
                    </Link>{" "}
                    or reach out to a staff member in our Discord server.
                </Text>

                <Text
                    style={{
                        fontSize: EMAIL_SUPERTEXT_SIZE,
                        opacity: 0.5,
                        marginTop: EMAIL_TEXT_SIZE,
                        lineHeight: 1.5
                    }}
                >
                    <Link
                        href="https://discord.com/invite/blacket"
                        style={{ color: EMAIL_LINK_COLOR }}
                    >
                        Discord
                    </Link>

                    {" | "}

                    <Link
                        href="https://blacket.org/terms"
                        style={{ color: EMAIL_LINK_COLOR }}
                    >
                        Terms of Service
                    </Link>

                    {" | "}

                    <Link
                        href="https://blacket.org/privacy"
                        style={{ color: EMAIL_LINK_COLOR }}
                    >
                        Privacy Policy
                    </Link>
                </Text>
            </Container>
        </Html>
    );
}
