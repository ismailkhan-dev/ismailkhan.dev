import React, { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/context/theme-context";
import { FaGithubSquare } from "react-icons/fa";

interface UserData {
    login?: string;
}

export default function GithubCalendar() {
    const { theme } = useTheme();
    const [userData, setUserData] = useState<UserData>({});
    const [repoCount, setRepoCount] = useState<number>(0);
    const [gistCount, setGistCount] = useState<number>(0);
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
                const [userResponse, reposResponse, gistResponse] =
                    await Promise.all([
                        axios.get<UserData>(`${url}`, {
                            headers: { Authorization: `Bearer ${token}` },
                        }),
                        axios.get(`${url}/repos`, {
                            headers: { Authorization: `Bearer ${token}` },
                        }),
                        axios.get(`${url}/gists`, {
                            headers: { Authorization: `Bearer ${token}` },
                        }),
                    ]);

                setUserData(userResponse.data);
                setRepoCount(reposResponse.data.length);
                setGistCount(gistResponse.data.length);
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
            <h3 className="text-center mb-1">
                Check out my GitHub Profile below for more work I've done.
            </h3>
            <div className="flex flex-row gap-2 items-center justify-center mb-1">
                <p className="font-semibold">Repository count: {repoCount}</p>
                <p className="font-semibold mr-4">Gist count: {gistCount}</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center my-6">
                <a
                    className="bg-white p-2 text-gray-700 dark:text-gray-300 flex items-center gap-2 text-[1.9rem] rounded-sm focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/ismailkhan-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithubSquare />
                    <p className="text-[1.4rem] font-bold">
                        Visit Github Profile
                    </p>
                </a>
            </div>

            {userData.login && (
                <div>
                    <GitHubCalendar
                        username={userData.login}
                        blockSize={15}
                        blockMargin={4}
                        colorScheme={theme}
                        fontSize={16}
                    />
                </div>
            )}
        </div>
    );
}
