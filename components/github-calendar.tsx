import React, { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/theme-context";

interface UserData {
    login?: string;
    public_repos?: number;
    owned_private_repos?: number;
    public_gists?: number;
    private_gists?: number;
    followers?: number;
}

export default function GithubCalendar() {
    const { theme } = useTheme();
    const [userData, setUserData] = useState<UserData>({});
    const [repoCount, setRepoCount] = useState<number>(0);
    const [gistCount, setGistCount] = useState<number>(0);
    const [followerCount, setFollowerCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN;
        const user = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
        const url = `https://api.github.com/users/${user}`;

        if (!token || !user) {
            setError(
                "Github token or user is not defined in the environment variables."
            );
            setLoading(false);
            return;
        }

        const fetchUserData = async () => {
            try {
                const userResponse = await axios.get<UserData>(`${url}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUserData(userResponse.data);
                console.log(userResponse.data);

                setRepoCount(
                    (userResponse.data.public_repos || 0) +
                        (userResponse.data.owned_private_repos || 0)
                );
                setGistCount(
                    (userResponse.data.public_gists || 0) +
                        (userResponse.data.private_gists || 0)
                );
                setFollowerCount(userResponse.data.followers || 0);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError("An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {userData.login && (
                <div className="flex lg:justify-center sm:justify-start">
                    <div className="overflow-x-auto min-w-[1000px]">
                        <div className="flex justify-start">
                            <GitHubCalendar
                                username={userData.login}
                                blockSize={15}
                                blockMargin={4}
                                colorScheme={theme}
                                fontSize={16}
                            />
                        </div>

                        <div className="flex flex-row gap-2">
                            <p>Repositories: {repoCount}</p>
                            <p>Gists: {gistCount}</p>
                            <p>Followers: {followerCount}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
