import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useState } from "react";
import { useMatch, useNavigate, PathMatch } from "react-router-dom";
